// import { lightGreen } from "@mui/material/colors";

const today = new Date().toLocaleDateString();
const yesterday = new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString();
const twoDaysAgo = new Date(new Date().setDate(new Date().getDate() - 2)).toLocaleDateString();
const threeDaysAgo = new Date(new Date().setDate(new Date().getDate() - 3)).toLocaleDateString();
const fourDaysAgo = new Date(new Date().setDate(new Date().getDate() - 4)).toLocaleDateString();
const fiveDaysAgo = new Date(new Date().setDate(new Date().getDate() - 5)).toLocaleDateString();
const sixDaysAgo = new Date(new Date().setDate(new Date().getDate() - 6)).toLocaleDateString();

const lightBlue =  "hsl(128, 70%, 50%)";
const darkBlue = "hsl(163, 70%, 50%)";
const lightGreen = "hsl(211, 70%, 50%)";
const darkGreen = "hsl(144, 70%, 50%)";
const pink = "hsl(191, 70%, 50%)";



export const data = [
  {
    "date": `${sixDaysAgo}`,
    "bloodTest": 5,
    "bloodTestColor": `${lightBlue}`,
    "radiology": 2,
    "radiologyColor": `${darkBlue}`,
    "reviews": 3,
    "reviewsColor": `${lightGreen}`,
    "discharge": 1,
    "dischargeColor": `${darkGreen}`,
    "other": 1,
    "otherColor": `${pink}`
  },
  {
    "date": `${fiveDaysAgo}`,
    "bloodTest": 8,
    "bloodTestColor":`${lightBlue}`,
    "radiology": 3,
    "radiologyColor":`${darkBlue}`,
    "reviews": 15,
    "reviewsColor": `${lightGreen}`,
    "discharge": 1,
    "dischargeColor":`${darkGreen}`,
    "other": 1,
    "otherColor": `${pink}`
  },
  {
    "date": `${fourDaysAgo}`,
    "bloodTest": 22,
    "bloodTestColor": `${lightBlue}`,
    "radiology": 2,
    "radiologyColor":`${darkBlue}`,
    "reviews": 4,
    "reviewsColor": `${lightGreen}`,
    "discharge": 1,
    "dischargeColor": `${darkGreen}`,
    "other": 1,
    "otherColor": `${pink}`
  },
  {
    "date": `${threeDaysAgo}`,
    "bloodTest": 4,
    "bloodTestColor":`${lightBlue}`,
    "radiology": 21,
    "radiologyColor": `${darkBlue}`,
    "reviews": 5,
    "reviewsColor":`${lightGreen}`,
    "discharge": 5,
    "dischargeColor": `${darkGreen}`,
    "other": 1,
    "otherColor": `${pink}`
  },
  {
    "date": `${twoDaysAgo}`,
    "bloodTest": 22,
    "bloodTestColor":`${lightBlue}`,
    "radiology": 3,
    "radiologyColor": `${darkBlue}`,
    "reviews": 7,
    "reviewsColor": `${lightGreen}`,
    "discharge": 1,
    "dischargeColor": `${darkGreen}`,
    "other": 1,
    "otherColor": `${pink}`
  },
  {
    "date": `${yesterday}`,
    "bloodTest": 8,
    "bloodTestColor":`${lightBlue}`,
    "radiology": 11,
    "radiologyColor": `${darkBlue}`,
    "reviews": 2,
    "reviewsColor": `${lightGreen}`,
    "discharge": 1,
    "dischargeColor":`${darkGreen}`,
    "other": 1,
    "otherColor":`${pink}`
  },
  {
    "date": `${today}`,
    "bloodTest": 1,
    "bloodTestColor": `${lightBlue}`,
    "radiology": 1,
    "radiologyColor": `${darkBlue}`,
    "reviews": 0,
    "reviewsColor": `${lightGreen}`,
    "discharge": 1,
    "dischargeColor": `${darkGreen}`,
    "other": 1,
    "otherColor": `${pink}`
  }
]

