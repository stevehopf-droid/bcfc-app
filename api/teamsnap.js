export default async function handler(req, res) {
  const token = process.env.TEAMSNAP_TOKEN;
  const teamId = 6805178;

  try {
    const [eventsRes, messagesRes] = await Promise.all([
      fetch(`https://api.teamsnap.com/v3/events/search?team_id=${teamId}`, {
        headers: { Authorization: `Bearer ${token}` }
      }),
      fetch(`https://api.teamsnap.com/v3/messages/search?team_id=${teamId}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
    ]);

    const eventsData = await eventsRes.json();
    const messagesData = await messagesRes.json();

    const now = new Date();

    const events = eventsData.collection.items
      .map(item => {
        const d = Object.fromEntries(item.data.map(f => [f.name, f.value]));
        if (!d.start_date) return null;
        const dt = new Date(d.start_date);
        if (dt < now) return null;
        const day = dt.toLocaleDateString('en-US', { weekday: 'short', timeZone: 'America/New_York' });
        const month = dt.toLocaleDateString('en-US', { month: 'long', timeZone: 'America/New_York' });
        const date = dt.toLocaleDateString('en-US', { day: 'numeric', timeZone: 'America/New_York' });
        const time = dt.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZone: 'America/New_York' });
        const opponent = d.opponent_name ? d.opponent_name.split(' 2012')[0].split(' G2012')[0].trim() : null;
        return {
          id: d.id,
          type: opponent ? 'game' : 'practice',
          opponent,
          name: d.name || '',
          day, month, date, time,
          location: d.location_name || null,
          locationDetails: d.additional_location_details || null,
          notes: d.notes || null,
          label: d.label || null,
          gameType: d.game_type || null,
          uniform: d.uniform || null,
          arriveEarly: d.minutes_to_arrive_early || 0,
        };
      })
      .filter(Boolean)
      .filter(e => !e.name.includes('GK') && !e.name.includes('Goalkeeper'))
      .sort((a, b) => new Date(a.month + ' ' + a.date + ' 2026') - new Date(b.month + ' ' + b.date + ' 2026'));

    const messages = messagesData.collection.items
      .reverse()
      .map(item => {
        const d = Object.fromEntries(item.data.map(f => [f.name, f.value]));
        const dt = new Date(d.created_at);
        const days = Math.floor((now - dt) / 86400000);
        const time = days === 0 ? 'Today' : days === 1 ? 'Yesterday' : days < 7 ? `${days}d ago` : days < 30 ? `${Math.floor(days / 7)}w ago` : dt.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        const sender = d.sender_name || '';
        const initials = sender.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
        const preview = (d.body || '').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim().slice(0, 100);
        return {
          id: d.id,
          sender,
          avatar: initials,
          subject: d.subject || '',
          preview,
          body: d.body || '',
          time,
          unread: !d.read_at,
        };
      });

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({ events, messages });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}