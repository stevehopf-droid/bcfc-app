import { useState, useEffect } from "react";

const LOGO_URL = "/logo.png";

const schedule = [
  { id: 1, type: "game", opponent: "Unique Ballers FC", name: "", day: "Sun", month: "May", date: "3", time: "11:15 AM", location: "Bushwick Inlet Park", locationDetails: null, notes: null, label: "FLIGHT 2 SOUTH BLUE GU14", gameType: "Away", uniform: "Purple", arriveEarly: 60 },
  { id: 2, type: "practice", opponent: null, name: "Spring Training", day: "Tue", month: "May", date: "5", time: "6:00 PM", location: "Parade Grounds field 9", locationDetails: "field 9", notes: "Please bring a ball, shin guards, and water. Wear BCFC full training kit.\n\nIf you cannot make a training, please contact your coach directly to let them know.", label: null, gameType: null, uniform: null, arriveEarly: 15 },
  { id: 3, type: "practice", opponent: null, name: "Spring Training", day: "Wed", month: "May", date: "6", time: "5:00 PM", location: "Socceroof Sunset Park", locationDetails: null, notes: "Please bring a ball, shin guards, and water. Wear BCFC full training kit.\n\nIf you cannot make a training, please contact your coach directly to let them know.", label: null, gameType: null, uniform: null, arriveEarly: 15 },
  { id: 4, type: "practice", opponent: null, name: "GK Training", day: "Wed", month: "May", date: "6", time: "5:00 PM", location: "Socceroof Sunset Park", locationDetails: null, notes: null, label: null, gameType: null, uniform: null, arriveEarly: 15 },
  { id: 5, type: "practice", opponent: null, name: "Goalkeeper Training", day: "Thu", month: "May", date: "7", time: "3:15 PM", location: "Pier 5 BBP", locationDetails: null, notes: null, label: null, gameType: null, uniform: null, arriveEarly: 10 },
  { id: 6, type: "practice", opponent: null, name: "Spring Training", day: "Fri", month: "May", date: "8", time: "6:00 PM", location: "Bush Terminal Park", locationDetails: null, notes: "Please bring a ball, shin guards, and water. Wear BCFC full training kit.\n\nIf you cannot make a training, please contact your coach directly to let them know.", label: null, gameType: null, uniform: null, arriveEarly: 15 },
  { id: 7, type: "game", opponent: "FC Copa Academy Brooklyn", name: "", day: "Sun", month: "May", date: "10", time: "11:30 AM", location: "Pier 5, Brooklyn Bridge Park - Field 1", locationDetails: null, notes: null, label: "FLIGHT 2 SOUTH BLUE GU14", gameType: "Home", uniform: "Black", arriveEarly: 60 },
  { id: 8, type: "practice", opponent: null, name: "Spring Training", day: "Tue", month: "May", date: "12", time: "6:00 PM", location: "Parade Grounds field 9", locationDetails: "field 9", notes: "Please bring a ball, shin guards, and water. Wear BCFC full training kit.\n\nIf you cannot make a training, please contact your coach directly to let them know.", label: null, gameType: null, uniform: null, arriveEarly: 15 },
  { id: 9, type: "practice", opponent: null, name: "Spring Training", day: "Wed", month: "May", date: "13", time: "5:00 PM", location: "Socceroof Sunset Park", locationDetails: null, notes: "Please bring a ball, shin guards, and water. Wear BCFC full training kit.\n\nIf you cannot make a training, please contact your coach directly to let them know.", label: null, gameType: null, uniform: null, arriveEarly: 15 },
  { id: 10, type: "practice", opponent: null, name: "GK Training", day: "Wed", month: "May", date: "13", time: "5:00 PM", location: "Socceroof Sunset Park", locationDetails: null, notes: null, label: null, gameType: null, uniform: null, arriveEarly: 15 },
  { id: 11, type: "practice", opponent: null, name: "Goalkeeper Training", day: "Thu", month: "May", date: "14", time: "3:15 PM", location: "Pier 5 BBP", locationDetails: null, notes: null, label: null, gameType: null, uniform: null, arriveEarly: 10 },
  { id: 12, type: "practice", opponent: null, name: "Spring Training", day: "Fri", month: "May", date: "15", time: "6:00 PM", location: "Bush Terminal Park", locationDetails: null, notes: "Please bring a ball, shin guards, and water. Wear BCFC full training kit.\n\nIf you cannot make a training, please contact your coach directly to let them know.", label: null, gameType: null, uniform: null, arriveEarly: 15 },
  { id: 13, type: "game", opponent: "Manhattan SC Force", name: "", day: "Sun", month: "May", date: "17", time: "11:30 AM", location: "Pier 5, Brooklyn Bridge Park - Field 1", locationDetails: null, notes: null, label: "FLIGHT 2 SOUTH BLUE GU14", gameType: "Home", uniform: "Black", arriveEarly: 60 },
  { id: 14, type: "practice", opponent: null, name: "Spring Training", day: "Tue", month: "May", date: "19", time: "6:00 PM", location: "Parade Grounds field 9", locationDetails: "field 9", notes: "Please bring a ball, shin guards, and water. Wear BCFC full training kit.\n\nIf you cannot make a training, please contact your coach directly to let them know.", label: null, gameType: null, uniform: null, arriveEarly: 15 },
  { id: 15, type: "practice", opponent: null, name: "Spring Training", day: "Wed", month: "May", date: "20", time: "5:00 PM", location: "Socceroof Sunset Park", locationDetails: null, notes: "Please bring a ball, shin guards, and water. Wear BCFC full training kit.\n\nIf you cannot make a training, please contact your coach directly to let them know.", label: null, gameType: null, uniform: null, arriveEarly: 15 },
  { id: 16, type: "practice", opponent: null, name: "GK Training", day: "Wed", month: "May", date: "20", time: "5:00 PM", location: "Socceroof Sunset Park", locationDetails: null, notes: null, label: null, gameType: null, uniform: null, arriveEarly: 15 },
  { id: 17, type: "practice", opponent: null, name: "Goalkeeper Training", day: "Thu", month: "May", date: "21", time: "3:15 PM", location: "Pier 5 BBP", locationDetails: null, notes: null, label: null, gameType: null, uniform: null, arriveEarly: 10 },
  { id: 18, type: "practice", opponent: null, name: "Spring Training", day: "Fri", month: "May", date: "22", time: "6:00 PM", location: "Bush Terminal Park", locationDetails: null, notes: "Please bring a ball, shin guards, and water. Wear BCFC full training kit.\n\nIf you cannot make a training, please contact your coach directly to let them know.", label: null, gameType: null, uniform: null, arriveEarly: 15 },
  { id: 19, type: "practice", opponent: null, name: "Massapequa Memorial Day Tournament", day: "Sat", month: "May", date: "23", time: "11:00 AM", location: "Long Island, NY", locationDetails: null, notes: "Games on both Saturday and Sunday", label: null, gameType: null, uniform: null, arriveEarly: 0 },
  { id: 20, type: "practice", opponent: null, name: "Massapequa Memorial Day Tournament", day: "Sun", month: "May", date: "24", time: "11:00 AM", location: "Long Island, NY", locationDetails: null, notes: "Games on both Saturday and Sunday", label: null, gameType: null, uniform: null, arriveEarly: 0 },
  { id: 21, type: "practice", opponent: null, name: "Spring Training", day: "Tue", month: "May", date: "26", time: "6:00 PM", location: "Parade Grounds field 9", locationDetails: "field 9", notes: "Please bring a ball, shin guards, and water. Wear BCFC full training kit.\n\nIf you cannot make a training, please contact your coach directly to let them know.", label: null, gameType: null, uniform: null, arriveEarly: 15 },
  { id: 22, type: "practice", opponent: null, name: "Spring Training", day: "Wed", month: "May", date: "27", time: "5:00 PM", location: "Socceroof Sunset Park", locationDetails: null, notes: "Please bring a ball, shin guards, and water. Wear BCFC full training kit.\n\nIf you cannot make a training, please contact your coach directly to let them know.", label: null, gameType: null, uniform: null, arriveEarly: 15 },
  { id: 23, type: "practice", opponent: null, name: "GK Training", day: "Wed", month: "May", date: "27", time: "5:00 PM", location: "Socceroof Sunset Park", locationDetails: null, notes: null, label: null, gameType: null, uniform: null, arriveEarly: 15 },
  { id: 24, type: "practice", opponent: null, name: "Goalkeeper Training", day: "Thu", month: "May", date: "28", time: "3:15 PM", location: "Pier 5 BBP", locationDetails: null, notes: null, label: null, gameType: null, uniform: null, arriveEarly: 10 },
  { id: 25, type: "practice", opponent: null, name: "Spring Training", day: "Fri", month: "May", date: "29", time: "6:00 PM", location: "Bush Terminal Park", locationDetails: null, notes: "Please bring a ball, shin guards, and water. Wear BCFC full training kit.\n\nIf you cannot make a training, please contact your coach directly to let them know.", label: null, gameType: null, uniform: null, arriveEarly: 15 },
  { id: 26, type: "game", opponent: "Brooklyn Force SC", name: "", day: "Sun", month: "May", date: "31", time: "11:00 AM", location: "TBD", locationDetails: null, notes: null, label: "FLIGHT 2 SOUTH BLUE GU14", gameType: "Away", uniform: "Purple", arriveEarly: 60 },
  { id: 27, type: "practice", opponent: null, name: "Spring Training", day: "Tue", month: "June", date: "2", time: "6:00 PM", location: "Parade Grounds field 9", locationDetails: "field 9", notes: "Please bring a ball, shin guards, and water. Wear BCFC full training kit.\n\nIf you cannot make a training, please contact your coach directly to let them know.", label: null, gameType: null, uniform: null, arriveEarly: 15 },
  { id: 28, type: "practice", opponent: null, name: "Spring Training", day: "Wed", month: "June", date: "3", time: "5:00 PM", location: "Socceroof Sunset Park", locationDetails: null, notes: "Please bring a ball, shin guards, and water. Wear BCFC full training kit.\n\nIf you cannot make a training, please contact your coach directly to let them know.", label: null, gameType: null, uniform: null, arriveEarly: 15 },
  { id: 29, type: "practice", opponent: null, name: "GK Training", day: "Wed", month: "June", date: "3", time: "5:00 PM", location: "Socceroof Sunset Park", locationDetails: null, notes: null, label: null, gameType: null, uniform: null, arriveEarly: 15 },
  { id: 30, type: "practice", opponent: null, name: "Goalkeeper Training", day: "Thu", month: "June", date: "4", time: "3:15 PM", location: "Pier 5 BBP", locationDetails: null, notes: null, label: null, gameType: null, uniform: null, arriveEarly: 10 },
  { id: 31, type: "practice", opponent: null, name: "Spring Training", day: "Fri", month: "June", date: "5", time: "6:00 PM", location: "Bush Terminal Park", locationDetails: null, notes: "Please bring a ball, shin guards, and water. Wear BCFC full training kit.\n\nIf you cannot make a training, please contact your coach directly to let them know.", label: null, gameType: null, uniform: null, arriveEarly: 15 },
  { id: 32, type: "practice", opponent: null, name: "Spring Training", day: "Tue", month: "June", date: "9", time: "6:00 PM", location: "Parade Grounds field 9", locationDetails: "field 9", notes: "Please bring a ball, shin guards, and water. Wear BCFC full training kit.\n\nIf you cannot make a training, please contact your coach directly to let them know.", label: null, gameType: null, uniform: null, arriveEarly: 15 },
  { id: 33, type: "practice", opponent: null, name: "Spring Training", day: "Wed", month: "June", date: "10", time: "5:00 PM", location: "Socceroof Sunset Park", locationDetails: null, notes: "Please bring a ball, shin guards, and water. Wear BCFC full training kit.\n\nIf you cannot make a training, please contact your coach directly to let them know.", label: null, gameType: null, uniform: null, arriveEarly: 15 },
  { id: 34, type: "practice", opponent: null, name: "GK Training", day: "Wed", month: "June", date: "10", time: "5:00 PM", location: "Socceroof Sunset Park", locationDetails: null, notes: null, label: null, gameType: null, uniform: null, arriveEarly: 15 },
];

const messages = [
  { id: 1, sender: "Amy Marron", avatar: "AM", subject: "5.3 Game", preview: "Looking forward to this weekend. Please continue to update me if your availability changes.", body: "<p>Hi All!</p>\n<p>Looking forward to this weekend. As always please continue to update me if your availbility changes at all.</p>\n<p>Location: Bushwick Inlet Park</p>\n<p>Jersey: Purple</p>\n<p>Arrival time: 11:15am</p>\n<p>Game time: 12:15pm</p>\n<p>Roster:</p>\n<p>Sofia &nbsp; &nbsp; &nbsp; Luca &nbsp; &nbsp; &nbsp; Lucia &nbsp; &nbsp; Anneliese</p>\n<p>Sloane &nbsp; &nbsp;Josie &nbsp; &nbsp; &nbsp; Priya &nbsp; &nbsp; Olive</p>\n<p>Inaya &nbsp; &nbsp; &nbsp;Claudia &nbsp; &nbsp;Jade &nbsp; &nbsp; &nbsp;Emme</p>\n<p>Lina &nbsp; &nbsp; &nbsp; &nbsp;Violet &nbsp; &nbsp; &nbsp; Jazira &nbsp; &nbsp;Zerina</p>\n<p>See you tonight!</p>\n<p>Amy</p>", time: "Yesterday", unread: true },
  { id: 2, sender: "Jesse DeLorenzo", avatar: "JD", subject: "Cliff notes for rising 9th graders", preview: "Apologies for the long delay. We will have meetings in the near future about the club schedule.", body: "<p>Good evening all,</p>\n<p>Apologies for the long delay. We will have meetings in the near future about what the club schedule looks like for u15-u18 (the \"high school ages\"), but a few parents had asked, in lieu of the Early Bird Discount deadline, and we wanted to provide some basic information.</p>\n<ul>\n<li>Once players enter high school, the majority of club players also play high school soccer, which takes place in Sept-Oct (playoffs in early November).</li>\n<li>In order to <em>NOT </em>overload the players, at these ages we run a reduced schedule of training-only 1x-2x/week during the high school soccer months.</li>\n<li>Starting late October u15-u18s play a \"Late Fall\" league which is a shortened schedule of games, and we increase training to 2x-3x week.</li>\n<li>Winter and Spring are on same schedule as always.</li>\n</ul>\n<p>Now that the age group definitions have changed, it does complicate the situation slightly, but our fundamental approach remains the same. The new age groups look like this:</p>\n<ul>\n<li>u13 (born 8/1/2013-7/31/2014) - 8th graders and 7th graders</li>\n<li>u14 (born 8/1/2012-7/31/2013) - 9th graders and 8th graders</li>\n<li>u15 (born 8/1/2011-7/31/2012) <em>*High School schedule</em></li>\n</ul>\n<p>u13 and u14 will play a normal club schedule in the Fall.</p>\n<p>We hope this helps. In terms of how the club is approaching placement of players, please refer to my prior email about renewals, or Coach Madison's prior emails.</p>\n<p>Thank you and please don't hesitate to reach out with any questions!</p>\n<p>Jesse DeLorenzo</p>\n<p>Brooklyn City F.C.</p>", time: "2d ago", unread: true },
  { id: 3, sender: "Amy Marron", avatar: "AM", subject: "4.26 Match", preview: "Looking forward to this weekend! Please keep me updated if any availability changes.", body: "<p>Hi All,</p>\n<p>Looking forward to this weekend! Please continue to keep me updated if any availability changes.</p>\n<p>Arrival time: 11:30am</p>\n<p>Location: Pier 5 Brooklyn Bridge Park</p>\n<p>Game time: 12:30pm</p>\n<p>Uniform: Black</p>\n<p>Roster:</p>\n<p>Sofia &nbsp; &nbsp; &nbsp; Luca &nbsp; &nbsp; &nbsp; &nbsp; Lucia &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Jazira &nbsp; &nbsp; &nbsp;Olive</p>\n<p>Sloane &nbsp; &nbsp;Violet &nbsp; &nbsp; &nbsp; &nbsp;Inaya &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Zerina &nbsp; &nbsp; Anneliese</p>\n<p>Claudia &nbsp; Jade &nbsp; &nbsp; &nbsp; &nbsp; Josephine &nbsp; Emme &nbsp; &nbsp; Sage</p>\n<p>Please let me know if you have any questions. See you all tonight.</p>\n<p>Amy</p>", time: "1w ago", unread: false },
  { id: 4, sender: "Amy Marron", avatar: "AM", subject: "Game 4/19", preview: "We had a solid week of practice and are looking forward to the game this weekend.", body: "<p>Hi All,</p>\n<p>We had a solid week of practice and we are looking forward to the game this weekend. Coach Madison will be present for your game tomorrow.</p>\n<p>Location: Riverdale Country School - Bertino</p>\n<p>(5250 Fieldstone Rd Bronx, NY)</p>\n<p>Please arrive by 1:30pm</p>\n<p>Kickoff time: 2:30pm</p>\n<p>Roster:</p>\n<p>Anneliese &nbsp; &nbsp; &nbsp; Jazira &nbsp; &nbsp; &nbsp; Josephine &nbsp; &nbsp; Luca</p>\n<p>Claudia &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Josie &nbsp; &nbsp; &nbsp; &nbsp;Lucia &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Megan</p>\n<p>Emme &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Olive &nbsp; &nbsp; &nbsp; &nbsp;Sage &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Zerina</p>\n<p>Gianna &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sloane &nbsp; &nbsp; Violet &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Jade</p>\n<p>Thanks,</p>\n<p>Amy</p>", time: "2w ago", unread: false },
  { id: 5, sender: "Amy Marron", avatar: "AM", subject: "Practice Location Tonight", preview: "Thank you to all who attended last night. A reminder that tonight we will be at Socceroof.", body: "<p>Hi All,</p>\n<p>Thank you to all who attended last night. It was great to meet some of you in person!</p>\n<p>A reminder that tonight we will be at Socceroof (Sunset Park) - field 1 and 2 at 6pm.</p>\n<p>See you tonight!</p>\n<p>Amy</p>", time: "3w ago", unread: false },
  { id: 6, sender: "Madison Pickett", avatar: "MP", subject: "Parade Grounds – Field Location for Tuesday Spring Training", preview: "We hope you are enjoying your Spring Break! Wanted to share key details for Parade Grounds.", body: "<p>Hi everyone,</p>\n<p>We hope you are either enjoying your Spring Break or had a great one!</p>\n<p>I wanted to share a few key details to help everyone easily locate BCFC at Parade Grounds this evening.</p>\n<p>We will be on <strong>Field 9</strong>, if you're familiar with the park layout, it is the football field. This field was newly renovated this fall/winter.</p>\n<p>The closest intersection is <strong>Caton Ave &amp; Rugby Rd</strong>, directly across from the Caton Park Nursing Home.</p>\n<p><strong>Location:</strong><br>Parade Grounds (Field 9)<br>1312 Caton Ave<br>Brooklyn, NY 11226</p>\n<p><strong>Transportation:</strong></p>\n<ul>\n<li>Closest Subway: B &amp; Q Church Ave. Trains (Caton Ave &amp; St. Paul's Place)</li>\n<li>Alternate subway: F &amp; G trains to Ft. Hamilton Pkwy (~10-minute walk)</li>\n<li>Closest Bus routes: B16, B68</li>\n<li>Citi Bike docks available around the park</li>\n</ul>\n<p>Please remember that all players <strong>must bring their own soccer ball and water</strong>, as these will not be provided at the field.</p>\n<p>See you tonight!<br>Madison</p>\n<p><strong>Madison Pickett</strong><br>Youth Director of Coaching</p>", time: "3w ago", unread: false },
  { id: 7, sender: "Jesse DeLorenzo", avatar: "JD", subject: "Coaching Staff Update", preview: "Happy Easter! We want to share that Amy Marron has joined the youth staff as head coach.", body: "<p>Good evening team,</p>\n<p>Happy Easter to those who celebrate! We hope everyone had an enjoyable and restful weekend with family.</p>\n<p>Last weekend, we were delivered the unfortunate news that Leti would be leaving the club immediately. We found out last Saturday, that Tuesday 3/31 would be her last day. She has moved back to California, closer to family.</p>\n<p>Fortunately, we had been proactively speaking with Amy Marron, one of our WPSL women's coaches, about joining our youth staff this Spring. We're happy to report that we've signed Amy to officially join our youth staff as well, and she will take over immediately as head coach of the G12/13 squad.</p>\n<p>Amy has been assistant coach for the St John's University women's soccer program in Queens for many years, working with many future professionals and Youth National Team players. She's been on the BCFC WPSL women's staff since 2021. In addition to being a great person and true professional, Amy has extensive playing experience herself including playing professionally overseas, after graduating and playing for St John's herself.</p>\n<p>We're lucky to have Amy come on board and are excited to have her work with the girls. She's been added to TeamSnap and the girls will meet her at training this week.</p>\n<p>Feel free to direct any questions to Madison, our Youth DOC, or myself.</p>\n<p>Thanks!</p>\n<p>Jesse DeLorenzo<br>Brooklyn City F.C.</p>", time: "3w ago", unread: false },
  { id: 8, sender: "Madison Pickett", avatar: "MP", subject: "Bush Terminal – Spring Training Details", preview: "We're looking forward to getting teams out at Bush Terminal Park tonight! All teams on Field 3.", body: "<p>Hi everyone,</p>\n<p>We're looking forward to getting teams out this evening at Bush Terminal Park! All teams will be on Field 3 (9v9 field), the field furthest from the bathrooms.</p>\n<p>Please make sure all cold weather gear is BCFC attire. With the waterfront conditions, we strongly recommend multiple layers to keep players comfortable.</p>\n<p><strong>Location:</strong><br>Bush Terminal Park<br>58 50th St<br>Brooklyn, NY 11232</p>\n<p>The best entrance is off 1st Ave &amp; 50th St. From there, follow the bike path around to the back. Please be sure to factor in the walk to the fields when planning your arrival time.</p>\n<p>As we transition back outdoors, a reminder that all players <strong>must bring their own soccer ball and water.</strong></p>\n<p>See you tonight!<br>Madison</p>\n<p><strong>Madison Pickett</strong><br>Youth Director of Coaching</p>", time: "Mar 17", unread: false },
  { id: 9, sender: "Jesse DeLorenzo", avatar: "JD", subject: "Change to March Training Schedule", preview: "Additional field time opened up — switching Monday training back to Tuesdays for March.", body: "<p>Good evening all,</p>\n<p>After we originally did the training schedule, some additional field time opened up for us in March, and we are able to switch the Monday training day back to Tuesdays, for March. Apologies for the back and forth and late change, but we wanted to consider everyone's feedback and do what we could to further minimize the changes.</p>\n<p>The g12/13 March Tuesday sessions will be at Bush Terminal Park at 7:15pm. We'll make the change in Teamsnap tomorrow.</p>\n<p>Thank you for your patience!</p>", time: "Mar 14", unread: false },
  { id: 10, sender: "Madison Pickett", avatar: "MP", subject: "G2012/13 Spring Training Schedules", preview: "As we transition into the spring season, here are training schedule updates beginning next week.", body: "<p>G12/13 Families,</p>\n<p>As we transition into the spring season, we wanted to share an update regarding training schedules beginning next week.</p>\n<p>Due to spring field permits not starting until April, outdoor training during the remainder of March will look slightly different for some teams.</p>\n<p><strong>MARCH SCHEDULE</strong> (Starting 3/16 - Through March 31st)<br>Monday - 7:15-8:30 PM - Dustbowl<br>Wednesday - 5:45-7:00 PM - Bush Terminal Park<br>Thursday - 4:00-5:15 PM - Pier 5 BBP</p>\n<p><strong>APRIL SCHEDULE</strong> (Beginning April 1st - Ending Mid-June)<br>Tuesday - 7:00-8:00 PM - Parade Grounds<br>Wednesday - 6:00-7:00 PM - Socceroof Sunset Park<br>Friday - 7:00-8:00 PM - Bush Terminal Park</p>\n<p>Please feel free to reach out if you have any questions, and thank you for your flexibility as we transition into the spring season.</p>\n<p>Best,<br>Madison</p>\n<p><strong>Madison Pickett</strong><br>Youth Director of Coaching</p>", time: "Mar 11", unread: false },
  { id: 11, sender: "Madison Pickett", avatar: "MP", subject: "iSE Spring Invitational – Location Cancellation", preview: "Games at Friendship Field in Bordentown have been canceled due to field conditions.", body: "<p>Hi BCFC Families,</p>\n<p>You are receiving this email because your team was scheduled to compete this weekend at the iSE Spring Invitational, with games assigned to Friendship Field in Bordentown.</p>\n<p>Unfortunately, we were informed this evening by the tournament organizers that all games scheduled at Friendship Field have been <strong>canceled due to field conditions</strong>. The facility remains snow covered, and the fields will not be in suitable condition for play this weekend.</p>\n<p>We understand this is disappointing news. Our staff will look to organize a local scrimmage opportunity in NYC this weekend to provide the players with outdoor competition ahead of the spring season. Your head coach will follow up directly with any updates regarding potential scrimmages.</p>\n<p>In the meantime, we highly encourage players and families to support <strong>Brooklyn FC</strong> in Coney Island this weekend if you are available.</p>\n<p>We apologize for the inconvenience and appreciate your continued support and flexibility.</p>\n<p>Thanks,<br>Madison</p>\n<p><strong>Madison Pickett</strong><br>Youth Director of Coaching</p>", time: "Mar 4", unread: false },
  { id: 12, sender: "Madison Pickett", avatar: "MP", subject: "Olive Sherman-Hopf – Player Eval 2026", preview: "Your player evaluation is attached. Thank you for your effort and commitment this season.", body: "<p>Hello,</p>\n<p>Your player evaluation is attached. Thank you for your effort and commitment so far this season. If you have any questions, please reach out to your head coach.</p>\n<p>Best,<br>Madison</p>\n<p><strong>Madison Pickett</strong><br>Youth Director of Coaching</p>", time: "Feb 17", unread: false },
];

function groupByMonth(items) {
  const groups = [];
  let currentMonth = null;
  items.forEach(item => {
    if (item.month !== currentMonth) {
      currentMonth = item.month;
      groups.push({ month: item.month, items: [item] });
    } else {
      groups[groups.length - 1].items.push(item);
    }
  });
  return groups;
}



const ChatIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const BackIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const ShirtIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z"/>
  </svg>
);

// ── Event Detail View ──────────────────────────────────────────────────────
const LOCATION_ADDRESSES = {
  "Bushwick Inlet Park":                        "50 Kent Ave, Brooklyn, NY 11249",
  "Parade Grounds field 9":                     "1312 Caton Ave, Brooklyn, NY 11226",
  "Parade Grounds Field 9":                     "1312 Caton Ave, Brooklyn, NY 11226",
  "Socceroof Sunset Park":                      "3801 1st Ave, Brooklyn, NY 11232",
  "Pier 5 BBP":                                 "Pier 5, Brooklyn Bridge Park, Brooklyn, NY 11201",
  "Bush Terminal Park":                          "58 50th St, Brooklyn, NY 11232",
  "Pier 5, Brooklyn Bridge Park - Field 1 - 11v11": "Pier 5, Brooklyn Bridge Park, Brooklyn, NY 11201",
  "Pier 5, Brooklyn Bridge Park - Field 1":     "Pier 5, Brooklyn Bridge Park, Brooklyn, NY 11201",
  "Leif Ericson Park- Dust Bowl":               "65 Ovington Ave, Brooklyn, NY 11209",
  "Dyker Park Turf":                            "86th St & 7th Ave, Brooklyn, NY 11228",
  "Red Hook Field":                             "160 Bay St, Brooklyn, NY 11231",
  "Riverdale Country School - Bertino":         "5250 Fieldstone Rd, Bronx, NY 10471",
  "Prospect Park- 9th street entrance":        "Prospect Park, Brooklyn, NY 11215",
  "Brooklyn College Athletic Field":            "2900 Campus Rd, Brooklyn, NY 11210",
};

function getMapsUrl(location, address) {
  const query = encodeURIComponent(address || location);
  return `https://maps.google.com/?q=${query}`;
}

function EventDetail({ item, onBack }) {
  const [rsvp, setRsvp] = useState(null);
  const isGame = item.type === "game";
  const title = isGame ? item.opponent : item.name;
  const arrivalTime = item.arriveEarly > 0 ? `Arrive ${item.arriveEarly} min early` : null;
  const address = item.location ? LOCATION_ADDRESSES[item.location] || null : null;
  const mapsUrl = item.location ? getMapsUrl(item.location, address) : null;

  return (
    <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", minHeight: "100vh", background: "#fff" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", padding: "16px 20px", borderBottom: "1px solid #f0f0f0", position: "sticky", top: 0, background: "#fff", zIndex: 10 }}>
        <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", padding: "4px 8px 4px 0", color: "#111", display: "flex", alignItems: "center", gap: 2, marginRight: 8 }}>
          <BackIcon />
        </button>
        <span style={{ fontSize: 16, fontWeight: 600, color: "#111", letterSpacing: -0.3 }}>
          {item.month} {item.date}
        </span>
      </div>

      <div style={{ padding: "24px 20px 60px" }}>
        {/* Type badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.4, textTransform: "uppercase", color: isGame ? "#111" : "#aaa" }}>
            {isGame ? "Game" : item.name.includes("GK") || item.name.includes("Goalkeeper") ? "GK Training" : item.name.includes("Tournament") ? "Tournament" : "Practice"}
          </span>
          {isGame && item.gameType && (
            <span style={{ fontSize: 10, background: "#111", color: "#fff", padding: "2px 7px", borderRadius: 3, fontWeight: 600, letterSpacing: 0.5 }}>
              {item.gameType}
            </span>
          )}
          {isGame && item.label && (
            <span style={{ fontSize: 10, color: "#bbb", fontWeight: 500, letterSpacing: 0.3 }}>{item.label}</span>
          )}
        </div>

        {/* Title */}
        <h1 style={{ fontSize: 28, fontWeight: 800, color: "#111", margin: "0 0 24px", letterSpacing: -0.8, lineHeight: 1.1 }}>
          {isGame ? `vs ${title}` : title}
        </h1>

        {/* RSVP — games only */}
        {isGame && (
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: "#bbb", marginBottom: 10 }}>Attendance</div>
            <div style={{ display: "flex", gap: 8 }}>
              {["Going", "Maybe", "No"].map(opt => {
                const selected = rsvp === opt;
                const colors = { Going: "#111", Maybe: "#888", No: "#c00" };
                return (
                  <button key={opt} onClick={() => setRsvp(selected ? null : opt)} style={{
                    flex: 1,
                    padding: "10px 0",
                    borderRadius: 8,
                    border: `1.5px solid ${selected ? colors[opt] : "#e8e8e8"}`,
                    background: selected ? colors[opt] : "#fff",
                    color: selected ? "#fff" : "#888",
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    letterSpacing: 0.2,
                    transition: "all 0.15s",
                  }}>
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Info rows — all text 2px larger */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid #f0f0f0" }}>

          {/* Date & time */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 0", borderBottom: "1px solid #f0f0f0" }}>
            <div style={{ color: "#bbb", flexShrink: 0 }}><ClockIcon /></div>
            <div>
              <div style={{ fontSize: 17, fontWeight: 600, color: "#111" }}>{item.day}, {item.month} {item.date}</div>
              <div style={{ fontSize: 15, color: "#888", marginTop: 2 }}>{item.time}{arrivalTime ? ` — ${arrivalTime}` : ""}</div>
            </div>
          </div>

          {/* Location — links to Google Maps */}
          {item.location && item.location !== "TBD" && (
            <a href={mapsUrl} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "14px 0", borderBottom: "1px solid #f0f0f0", textDecoration: "none" }}>
              <div style={{ color: "#bbb", flexShrink: 0, paddingTop: 3 }}><LocationIcon /></div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 17, fontWeight: 600, color: "#111" }}>{item.location}</div>
                {address && <div style={{ fontSize: 15, color: "#888", marginTop: 2 }}>{address}</div>}
                {item.locationDetails && <div style={{ fontSize: 14, color: "#bbb", marginTop: 2 }}>{item.locationDetails}</div>}
                <div style={{ fontSize: 13, color: "#007AFF", marginTop: 4, fontWeight: 500 }}>Open in Maps →</div>
              </div>
            </a>
          )}
          {item.location === "TBD" && (
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 0", borderBottom: "1px solid #f0f0f0" }}>
              <div style={{ color: "#bbb", flexShrink: 0 }}><LocationIcon /></div>
              <div style={{ fontSize: 17, fontWeight: 600, color: "#bbb" }}>Location TBD</div>
            </div>
          )}

          {/* Uniform */}
          {item.uniform && (
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 0", borderBottom: "1px solid #f0f0f0" }}>
              <div style={{ color: "#bbb", flexShrink: 0 }}><ShirtIcon /></div>
              <div>
                <div style={{ fontSize: 17, fontWeight: 600, color: "#111" }}>Uniform</div>
                <div style={{ fontSize: 15, color: "#888", marginTop: 2 }}>{item.uniform}</div>
              </div>
            </div>
          )}
        </div>

        {/* Notes */}
        {item.notes && (
          <div style={{ marginTop: 24 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: "#bbb", marginBottom: 10 }}>Notes</div>
            <div style={{ fontSize: 16, color: "#444", lineHeight: 1.6, whiteSpace: "pre-line" }}>{item.notes}</div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Message Detail View ────────────────────────────────────────────────────
function MessageDetail({ msg, onBack }) {
  return (
    <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", minHeight: "100vh", background: "#fff" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", padding: "16px 20px", borderBottom: "1px solid #f0f0f0", position: "sticky", top: 0, background: "#fff", zIndex: 10 }}>
        <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", padding: "4px 8px 4px 0", color: "#111", display: "flex", alignItems: "center", gap: 2, marginRight: 8 }}>
          <BackIcon />
        </button>
        <span style={{ fontSize: 16, fontWeight: 600, color: "#111", letterSpacing: -0.3, flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {msg.subject}
        </span>
      </div>

      <div style={{ padding: "20px 20px 60px" }}>
        {/* Sender row */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid #f0f0f0" }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#111", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, letterSpacing: 0.5, flexShrink: 0 }}>
            {msg.avatar}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#111", marginBottom: 2 }}>{msg.sender}</div>
            <div style={{ fontSize: 12, color: "#bbb" }}>{msg.time}</div>
          </div>
        </div>

        {/* Subject */}
        <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111", margin: "0 0 20px", letterSpacing: -0.5, lineHeight: 1.25 }}>
          {msg.subject}
        </h2>

        {/* Body */}
        <div
          style={{ fontSize: 15, color: "#333", lineHeight: 1.65 }}
          dangerouslySetInnerHTML={{ __html: msg.body }}
        />
      </div>
    </div>
  );
}

// ── Main App ───────────────────────────────────────────────────────────────
export default function App() {
  const [tab, setTab] = useState("schedule");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [scheduleData, setScheduleData] = useState([]);
  const [messagesData, setMessagesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/teamsnap")
      .then(r => r.json())
      .then(data => {
        setScheduleData(data.events || []);
        setMessagesData(data.messages || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const monthGroups = groupByMonth(scheduleData);

  if (selectedEvent) return <EventDetail item={selectedEvent} onBack={() => setSelectedEvent(null)} />;
  if (selectedMessage) return <MessageDetail msg={selectedMessage} onBack={() => setSelectedMessage(null)} />;

  return (
    <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", background: "#fff", minHeight: "100vh", maxWidth: 430, margin: "0 auto", position: "relative", overflowX: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px 12px", borderBottom: "1px solid #f0f0f0", position: "sticky", top: 0, background: "#fff", zIndex: 10 }}>
        <img src={LOGO_URL} alt="Brooklyn City FC" onClick={() => setTab("schedule")} style={{ height: 48, width: 48, objectFit: "contain", cursor: "pointer" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={() => setTab(tab === "messages" ? "schedule" : "messages")} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, marginRight: 8, color: tab === "messages" ? "#111" : "#999", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <ChatIcon />
            {messagesData.filter(m => m.unread).length > 0 && tab !== "messages" && (
              <div style={{ position: "absolute", top: 2, right: 2, width: 7, height: 7, borderRadius: "50%", background: "#111" }} />
            )}
          </button>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#111", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 13, fontWeight: 600, letterSpacing: 0.5 }}>SH</div>
        </div>
      </div>

      <div style={{ padding: "20px 20px 8px" }}>
        <h1 style={{ fontSize: 26, fontWeight: 700, letterSpacing: -0.8, margin: 0, color: "#111" }}>
          {tab === "schedule" ? "Schedule" : "Messages"}
        </h1>
        {tab === "schedule" && <p style={{ margin: "4px 0 0", fontSize: 13, color: "#999", fontWeight: 400 }}>Spring 2026 Season</p>}
        {tab === "messages" && <p style={{ margin: "4px 0 0", fontSize: 13, color: "#999", fontWeight: 400 }}>{messagesData.filter(m => m.unread).length} unread</p>}
      </div>

      {loading && (
        <div style={{ padding: "60px 20px", textAlign: "center", color: "#bbb", fontSize: 14 }}>Loading...</div>
      )}

      {!loading && (
        <div style={{ padding: "8px 0 40px" }}>
          {tab === "schedule" && (
            <div>
              {monthGroups.map(({ month, items }) => (
                <div key={month}>
                  <div style={{ padding: "14px 20px 8px", fontSize: 11, fontWeight: 700, letterSpacing: 1.4, textTransform: "uppercase", color: "#bbb", borderBottom: "1px solid #f0f0f0" }}>
                    {month} 2026
                  </div>
                  {items.map((item) => (
                    <div key={item.id} onClick={() => setSelectedEvent(item)} style={{ padding: "16px 20px", borderBottom: "1px solid #f4f4f4", display: "flex", alignItems: "flex-start", gap: 16, cursor: "pointer", transition: "background 0.1s" }}
                      onMouseEnter={e => e.currentTarget.style.background = "#fafafa"}
                      onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                      <div style={{ minWidth: 40, textAlign: "center", paddingTop: 2 }}>
                        <div style={{ fontSize: 11, fontWeight: 600, color: "#999", textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 2 }}>{item.day}</div>
                        <div style={{ fontSize: 24, fontWeight: 700, color: "#111", letterSpacing: -1, lineHeight: 1 }}>{item.date}</div>
                      </div>
                      <div style={{ width: 1, alignSelf: "stretch", background: item.type === "game" ? "#111" : "#ddd", minHeight: 52 }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: item.type === "game" ? "#111" : "#aaa" }}>
                            {item.type === "game" ? "Game" : item.name.includes("Tournament") ? "Tournament" : "Practice"}
                          </span>
                          {item.type === "game" && <span style={{ fontSize: 10, background: "#111", color: "#fff", padding: "1px 6px", borderRadius: 3, fontWeight: 600, letterSpacing: 0.5 }}>vs</span>}
                        </div>
                        <div style={{ fontSize: 19, fontWeight: 700, color: "#111", marginBottom: 5, letterSpacing: -0.4, lineHeight: 1.15 }}>
                          {item.type === "game" ? item.opponent : item.name}
                        </div>
                        <div style={{ fontSize: 12, color: "#888", marginBottom: 2 }}>{item.time}</div>
                        <div style={{ fontSize: 12, color: "#aaa" }}>{item.location}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {tab === "messages" && (
            <div>
              {messagesData.map((msg) => (
                <div key={msg.id} onClick={() => setSelectedMessage(msg)} style={{ padding: "16px 20px", borderBottom: "1px solid #f4f4f4", display: "flex", alignItems: "center", gap: 14, cursor: "pointer", background: msg.unread ? "#fafafa" : "transparent", transition: "background 0.1s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "#f5f5f5"}
                  onMouseLeave={e => e.currentTarget.style.background = msg.unread ? "#fafafa" : "transparent"}>
                  <div style={{ width: 42, height: 42, borderRadius: "50%", background: msg.unread ? "#111" : "#e8e8e8", color: msg.unread ? "#fff" : "#666", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, letterSpacing: 0.5, flexShrink: 0 }}>
                    {msg.avatar}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
                      <span style={{ fontSize: 16, fontWeight: msg.unread ? 700 : 500, color: "#111", letterSpacing: -0.2 }}>{msg.sender}</span>
                      <span style={{ fontSize: 13, color: "#bbb", fontWeight: 400 }}>{msg.time}</span>
                    </div>
                    <div style={{ fontSize: 14, fontWeight: msg.unread ? 600 : 400, color: msg.unread ? "#111" : "#555", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: 2 }}>{msg.subject}</div>
                    <div style={{ fontSize: 14, color: "#aaa", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{msg.preview}</div>
                  </div>
                  {msg.unread && <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#111", flexShrink: 0 }} />}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}