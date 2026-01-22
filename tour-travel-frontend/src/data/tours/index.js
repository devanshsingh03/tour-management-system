import mountainTrekking7d from "./mountainTrekking7d";
import whitewaterRaftingDayTour from "./whitewaterRaftingDayTour";
import auroraTrailsExpedition from "./auroraTrailsExpedition";
import familyBeachWeek from "./familyBeachWeek";
import themeParkWeekend from "./themeParkWeekend";
import luxuryDubai5n from "./luxuryDubai5n";
import privateIslandRetreat from "./privateIslandRetreat";
import yogaRetreat5d from "./yogaRetreat5d";
import spaDetoxWeek from "./spaDetoxWeek";

export const ALL_TOURS = {
  [mountainTrekking7d.slug]: mountainTrekking7d,
  [whitewaterRaftingDayTour.slug]: whitewaterRaftingDayTour,
  [auroraTrailsExpedition.slug]: auroraTrailsExpedition,
  [familyBeachWeek.slug]: familyBeachWeek,
  [themeParkWeekend.slug]: themeParkWeekend,
  [luxuryDubai5n.slug]: luxuryDubai5n,
  [privateIslandRetreat.slug]: privateIslandRetreat,
  [yogaRetreat5d.slug]: yogaRetreat5d,
  [spaDetoxWeek.slug]: spaDetoxWeek
};

export const TOURS_ARRAY = Object.values(ALL_TOURS);



// // import mountainTrekking7d from "./mountainTrekking7d";
// // import auroraTrails from "./auroraTrails";
// // import spaDetox from "./spaDetox";
// // import luxuryDubai from "./luxuryDubai";
// // import familyBeach from "./familyBeach";
// // import privateIsland from "./privateIsland";
// // import yogaRetreat from "./yogaRetreat";
// // import themePark from "./themePark";
// // import whiteWater from "./whiteWater";

// // // 🔥 SINGLE SOURCE OF TRUTH
// // const ALL_TOURS = {
// //   "mountain-trekking-7d": mountainTrekking7d,
// //   "aurora-trails": auroraTrails,
// //   "spa-detox": spaDetox,
// //   "luxury-dubai": luxuryDubai,
// //   "family-beach": familyBeach,
// //   "private-island": privateIsland,
// //   "yoga-retreat": yogaRetreat,
// //   "theme-park": themePark,
// //   "white-water-rafting": whiteWater,
// // };

// // export default ALL_TOURS;



// // src/data/tours/index.js

// import mountainTrekking7d from "./mountainTrekking7d";
// import auroraTrails from "./auroraTrails";
// import spaDetox from "./spaDetox";
// import luxuryDubai from "./luxuryDubai";
// import familyBeach from "./familyBeach";
// import privateIsland from "./privateIsland";
// import yogaRetreat from "./yogaRetreat";
// import themePark from "./themePark";
// import whiteWater from "./whitewaterRafting";

// const ALL_TOURS = {
//   "mountain-trekking-7d": mountainTrekking7d,
//   "aurora-trails": auroraTrails,
//   "spa-detox": spaDetox,
//   "luxury-dubai": luxuryDubai,
//   "family-beach": familyBeach,
//   "private-island": privateIsland,
//   "yoga-retreat": yogaRetreat,
//   "theme-park": themePark,
//   "white-water-rafting": whiteWater,
// };

// export default ALL_TOURS;
