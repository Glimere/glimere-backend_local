require("dotenv").config();

const mongoose = require("mongoose");
const Size = require("./models/sizeModel");

const defaultMaleSizing = [
  {
    name: "Extra Extra Small",
    short_name: "xxs",
    unit: "inches",
    unit_code: "in",
    Weight: {
      measurement_name: "Weight",
      average: 75,
      range: { start: 70, end: 80 },
      unit: "libras",
      unit_code: "lbs",
    },
    measurements: {
      Neck_Circumference: {
        measurement_name: "Neck Circumference",
        average: 40,
        range: { start: 38, end: 42 },
      },
      Shoulder_Width: {
        measurement_name: "Shoulder Width",
        average: 48,
        range: { start: 46, end: 50 },
      },
      Chest_Circumference: {
        measurement_name: "Chest Circumference",
        average: 102,
        range: { start: 100, end: 104 },
      },
      Waist_Circumference: {
        measurement_name: "Waist Circumference",
        average: 88,
        range: { start: 86, end: 90 },
      },
      Hip_Circumference: {
        measurement_name: "Hip Circumference",
        average: 98,
        range: { start: 96, end: 100 },
      },
      Thigh_Circumference: {
        measurement_name: "Thigh Circumference",
        average: 60,
        range: { start: 58, end: 62 },
      },
      Inseam_Length: {
        measurement_name: "Inseam Length",
        average: 80,
        range: { start: 78, end: 82 },
      },
      Arm_Length: {
        measurement_name: "Arm Length",
        average: 64,
        range: { start: 62, end: 66 },
      },
      Wrist_Circumference: {
        measurement_name: "Wrist Circumference",
        average: 18,
        range: { start: 17, end: 19 },
      },
      Height: {
        measurement_name: "Height",
        average: 175,
        range: { start: 170, end: 180 },
      },
      Bicep_Circumference: {
        measurement_name: "Bicep Circumference",
        average: 32,
        range: { start: 30, end: 34 },
      },
      Forearm_Circumference: {
        measurement_name: "Forearm Circumference",
        average: 28,
        range: { start: 26, end: 30 },
      },
      Torso_Length: {
        measurement_name: "Torso Length",
        average: 50,
        range: { start: 48, end: 52 },
      },
      Leg_Length: {
        measurement_name: "Leg Length",
        average: 100,
        range: { start: 98, end: 102 },
      },
      Foot_Length: {
        measurement_name: "Foot Length",
        average: 26,
        range: { start: 25, end: 27 },
      },
      Ankle_Circumference: {
        measurement_name: "Ankle Circumference",
        average: 22,
        range: { start: 21, end: 23 },
      },
      Hand_Length: {
        measurement_name: "Hand Length",
        average: 19,
        range: { start: 18, end: 20 },
      },
      Head_Circumference: {
        measurement_name: "Head Circumference",
        average: 58,
        range: { start: 56, end: 60 },
      },
    },
  },
  {
    name: "Extra Small",
    short_name: "xs",
    unit: "inches",
    unit_code: "in",
    Weight: {
      measurement_name: "Weight",
      average: 75,
      range: { start: 70, end: 80 },
      unit: "libras",
      unit_code: "lbs",
    },
    measurements: {
      Neck_Circumference: {
        measurement_name: "Neck Circumference",
        average: 40,
        range: { start: 38, end: 42 },
      },
      Shoulder_Width: {
        measurement_name: "Shoulder Width",
        average: 48,
        range: { start: 46, end: 50 },
      },
      Chest_Circumference: {
        measurement_name: "Chest Circumference",
        average: 102,
        range: { start: 100, end: 104 },
      },
      Waist_Circumference: {
        measurement_name: "Waist Circumference",
        average: 88,
        range: { start: 86, end: 90 },
      },
      Hip_Circumference: {
        measurement_name: "Hip Circumference",
        average: 98,
        range: { start: 96, end: 100 },
      },
      Thigh_Circumference: {
        measurement_name: "Thigh Circumference",
        average: 60,
        range: { start: 58, end: 62 },
      },
      Inseam_Length: {
        measurement_name: "Inseam Length",
        average: 80,
        range: { start: 78, end: 82 },
      },
      Arm_Length: {
        measurement_name: "Arm Length",
        average: 64,
        range: { start: 62, end: 66 },
      },
      Wrist_Circumference: {
        measurement_name: "Wrist Circumference",
        average: 18,
        range: { start: 17, end: 19 },
      },
      Height: {
        measurement_name: "Height",
        average: 175,
        range: { start: 170, end: 180 },
      },
      Bicep_Circumference: {
        measurement_name: "Bicep Circumference",
        average: 32,
        range: { start: 30, end: 34 },
      },
      Forearm_Circumference: {
        measurement_name: "Forearm Circumference",
        average: 28,
        range: { start: 26, end: 30 },
      },
      Torso_Length: {
        measurement_name: "Torso Length",
        average: 50,
        range: { start: 48, end: 52 },
      },
      Leg_Length: {
        measurement_name: "Leg Length",
        average: 100,
        range: { start: 98, end: 102 },
      },
      Foot_Length: {
        measurement_name: "Foot Length",
        average: 26,
        range: { start: 25, end: 27 },
      },
      Ankle_Circumference: {
        measurement_name: "Ankle Circumference",
        average: 22,
        range: { start: 21, end: 23 },
      },
      Hand_Length: {
        measurement_name: "Hand Length",
        average: 19,
        range: { start: 18, end: 20 },
      },
      Head_Circumference: {
        measurement_name: "Head Circumference",
        average: 58,
        range: { start: 56, end: 60 },
      },
    },
  },
  {
    name: "Small",
    short_name: "sm",
    unit: "inches",
    unit_code: "in",
    Weight: {
      measurement_name: "Weight",
      average: 75,
      range: { start: 70, end: 80 },
      unit: "libras",
      unit_code: "lbs",
    },
    measurements: {
      Neck_Circumference: {
        measurement_name: "Neck Circumference",
        average: 40,
        range: { start: 38, end: 42 },
      },
      Shoulder_Width: {
        measurement_name: "Shoulder Width",
        average: 48,
        range: { start: 46, end: 50 },
      },
      Chest_Circumference: {
        measurement_name: "Chest Circumference",
        average: 102,
        range: { start: 100, end: 104 },
      },
      Waist_Circumference: {
        measurement_name: "Waist Circumference",
        average: 88,
        range: { start: 86, end: 90 },
      },
      Hip_Circumference: {
        measurement_name: "Hip Circumference",
        average: 98,
        range: { start: 96, end: 100 },
      },
      Thigh_Circumference: {
        measurement_name: "Thigh Circumference",
        average: 60,
        range: { start: 58, end: 62 },
      },
      Inseam_Length: {
        measurement_name: "Inseam Length",
        average: 80,
        range: { start: 78, end: 82 },
      },
      Arm_Length: {
        measurement_name: "Arm Length",
        average: 64,
        range: { start: 62, end: 66 },
      },
      Wrist_Circumference: {
        measurement_name: "Wrist Circumference",
        average: 18,
        range: { start: 17, end: 19 },
      },
      Height: {
        measurement_name: "Height",
        average: 175,
        range: { start: 170, end: 180 },
      },
      Bicep_Circumference: {
        measurement_name: "Bicep Circumference",
        average: 32,
        range: { start: 30, end: 34 },
      },
      Forearm_Circumference: {
        measurement_name: "Forearm Circumference",
        average: 28,
        range: { start: 26, end: 30 },
      },
      Torso_Length: {
        measurement_name: "Torso Length",
        average: 50,
        range: { start: 48, end: 52 },
      },
      Leg_Length: {
        measurement_name: "Leg Length",
        average: 100,
        range: { start: 98, end: 102 },
      },
      Foot_Length: {
        measurement_name: "Foot Length",
        average: 26,
        range: { start: 25, end: 27 },
      },
      Ankle_Circumference: {
        measurement_name: "Ankle Circumference",
        average: 22,
        range: { start: 21, end: 23 },
      },
      Hand_Length: {
        measurement_name: "Hand Length",
        average: 19,
        range: { start: 18, end: 20 },
      },
      Head_Circumference: {
        measurement_name: "Head Circumference",
        average: 58,
        range: { start: 56, end: 60 },
      },
    },
  },
  {
    name: "Medium",
    short_name: "m",
    unit: "inches",
    unit_code: "in",
    Weight: {
      measurement_name: "Weight",
      average: 75,
      range: { start: 70, end: 80 },
      unit: "libras",
      unit_code: "lbs",
    },
    measurements: {
      Neck_Circumference: {
        measurement_name: "Neck Circumference",
        average: 40,
        range: { start: 38, end: 42 },
      },
      Shoulder_Width: {
        measurement_name: "Shoulder Width",
        average: 48,
        range: { start: 46, end: 50 },
      },
      Chest_Circumference: {
        measurement_name: "Chest Circumference",
        average: 102,
        range: { start: 100, end: 104 },
      },
      Waist_Circumference: {
        measurement_name: "Waist Circumference",
        average: 88,
        range: { start: 86, end: 90 },
      },
      Hip_Circumference: {
        measurement_name: "Hip Circumference",
        average: 98,
        range: { start: 96, end: 100 },
      },
      Thigh_Circumference: {
        measurement_name: "Thigh Circumference",
        average: 60,
        range: { start: 58, end: 62 },
      },
      Inseam_Length: {
        measurement_name: "Inseam Length",
        average: 80,
        range: { start: 78, end: 82 },
      },
      Arm_Length: {
        measurement_name: "Arm Length",
        average: 64,
        range: { start: 62, end: 66 },
      },
      Wrist_Circumference: {
        measurement_name: "Wrist Circumference",
        average: 18,
        range: { start: 17, end: 19 },
      },
      Height: {
        measurement_name: "Height",
        average: 175,
        range: { start: 170, end: 180 },
      },
      Bicep_Circumference: {
        measurement_name: "Bicep Circumference",
        average: 32,
        range: { start: 30, end: 34 },
      },
      Forearm_Circumference: {
        measurement_name: "Forearm Circumference",
        average: 28,
        range: { start: 26, end: 30 },
      },
      Torso_Length: {
        measurement_name: "Torso Length",
        average: 50,
        range: { start: 48, end: 52 },
      },
      Leg_Length: {
        measurement_name: "Leg Length",
        average: 100,
        range: { start: 98, end: 102 },
      },
      Foot_Length: {
        measurement_name: "Foot Length",
        average: 26,
        range: { start: 25, end: 27 },
      },
      Ankle_Circumference: {
        measurement_name: "Ankle Circumference",
        average: 22,
        range: { start: 21, end: 23 },
      },
      Hand_Length: {
        measurement_name: "Hand Length",
        average: 19,
        range: { start: 18, end: 20 },
      },
      Head_Circumference: {
        measurement_name: "Head Circumference",
        average: 58,
        range: { start: 56, end: 60 },
      },
    },
  },
  {
    name: "Large",
    short_name: "L",
    unit: "inches",
    unit_code: "in",
    Weight: {
      measurement_name: "Weight",
      average: 75,
      range: { start: 70, end: 80 },
      unit: "libras",
      unit_code: "lbs",
    },
    measurements: {
      Neck_Circumference: {
        measurement_name: "Neck Circumference",
        average: 40,
        range: { start: 38, end: 42 },
      },
      Shoulder_Width: {
        measurement_name: "Shoulder Width",
        average: 48,
        range: { start: 46, end: 50 },
      },
      Chest_Circumference: {
        measurement_name: "Chest Circumference",
        average: 102,
        range: { start: 100, end: 104 },
      },
      Waist_Circumference: {
        measurement_name: "Waist Circumference",
        average: 88,
        range: { start: 86, end: 90 },
      },
      Hip_Circumference: {
        measurement_name: "Hip Circumference",
        average: 98,
        range: { start: 96, end: 100 },
      },
      Thigh_Circumference: {
        measurement_name: "Thigh Circumference",
        average: 60,
        range: { start: 58, end: 62 },
      },
      Inseam_Length: {
        measurement_name: "Inseam Length",
        average: 80,
        range: { start: 78, end: 82 },
      },
      Arm_Length: {
        measurement_name: "Arm Length",
        average: 64,
        range: { start: 62, end: 66 },
      },
      Wrist_Circumference: {
        measurement_name: "Wrist Circumference",
        average: 18,
        range: { start: 17, end: 19 },
      },
      Height: {
        measurement_name: "Height",
        average: 175,
        range: { start: 170, end: 180 },
      },
      Bicep_Circumference: {
        measurement_name: "Bicep Circumference",
        average: 32,
        range: { start: 30, end: 34 },
      },
      Forearm_Circumference: {
        measurement_name: "Forearm Circumference",
        average: 28,
        range: { start: 26, end: 30 },
      },
      Torso_Length: {
        measurement_name: "Torso Length",
        average: 50,
        range: { start: 48, end: 52 },
      },
      Leg_Length: {
        measurement_name: "Leg Length",
        average: 100,
        range: { start: 98, end: 102 },
      },
      Foot_Length: {
        measurement_name: "Foot Length",
        average: 26,
        range: { start: 25, end: 27 },
      },
      Ankle_Circumference: {
        measurement_name: "Ankle Circumference",
        average: 22,
        range: { start: 21, end: 23 },
      },
      Hand_Length: {
        measurement_name: "Hand Length",
        average: 19,
        range: { start: 18, end: 20 },
      },
      Head_Circumference: {
        measurement_name: "Head Circumference",
        average: 58,
        range: { start: 56, end: 60 },
      },
    },
  },
  {
    name: "Extra Large",
    short_name: "xl",
    unit: "inches",
    unit_code: "in",
    Weight: {
      measurement_name: "Weight",
      average: 75,
      range: { start: 70, end: 80 },
      unit: "libras",
      unit_code: "lbs",
    },
    measurements: {
      Neck_Circumference: {
        measurement_name: "Neck Circumference",
        average: 40,
        range: { start: 38, end: 42 },
      },
      Shoulder_Width: {
        measurement_name: "Shoulder Width",
        average: 48,
        range: { start: 46, end: 50 },
      },
      Chest_Circumference: {
        measurement_name: "Chest Circumference",
        average: 102,
        range: { start: 100, end: 104 },
      },
      Waist_Circumference: {
        measurement_name: "Waist Circumference",
        average: 88,
        range: { start: 86, end: 90 },
      },
      Hip_Circumference: {
        measurement_name: "Hip Circumference",
        average: 98,
        range: { start: 96, end: 100 },
      },
      Thigh_Circumference: {
        measurement_name: "Thigh Circumference",
        average: 60,
        range: { start: 58, end: 62 },
      },
      Inseam_Length: {
        measurement_name: "Inseam Length",
        average: 80,
        range: { start: 78, end: 82 },
      },
      Arm_Length: {
        measurement_name: "Arm Length",
        average: 64,
        range: { start: 62, end: 66 },
      },
      Wrist_Circumference: {
        measurement_name: "Wrist Circumference",
        average: 18,
        range: { start: 17, end: 19 },
      },
      Height: {
        measurement_name: "Height",
        average: 175,
        range: { start: 170, end: 180 },
      },
      Bicep_Circumference: {
        measurement_name: "Bicep Circumference",
        average: 32,
        range: { start: 30, end: 34 },
      },
      Forearm_Circumference: {
        measurement_name: "Forearm Circumference",
        average: 28,
        range: { start: 26, end: 30 },
      },
      Torso_Length: {
        measurement_name: "Torso Length",
        average: 50,
        range: { start: 48, end: 52 },
      },
      Leg_Length: {
        measurement_name: "Leg Length",
        average: 100,
        range: { start: 98, end: 102 },
      },
      Foot_Length: {
        measurement_name: "Foot Length",
        average: 26,
        range: { start: 25, end: 27 },
      },
      Ankle_Circumference: {
        measurement_name: "Ankle Circumference",
        average: 22,
        range: { start: 21, end: 23 },
      },
      Hand_Length: {
        measurement_name: "Hand Length",
        average: 19,
        range: { start: 18, end: 20 },
      },
      Head_Circumference: {
        measurement_name: "Head Circumference",
        average: 58,
        range: { start: 56, end: 60 },
      },
    },
  },
  {
    name: "Extra Extra Large",
    short_name: "xxl",
    unit: "inches",
    unit_code: "in",
    Weight: {
      measurement_name: "Weight",
      average: 75,
      range: { start: 70, end: 80 },
      unit: "libras",
      unit_code: "lbs",
    },
    measurements: {
      Neck_Circumference: {
        measurement_name: "Neck Circumference",
        average: 40,
        range: { start: 38, end: 42 },
      },
      Shoulder_Width: {
        measurement_name: "Shoulder Width",
        average: 48,
        range: { start: 46, end: 50 },
      },
      Chest_Circumference: {
        measurement_name: "Chest Circumference",
        average: 102,
        range: { start: 100, end: 104 },
      },
      Waist_Circumference: {
        measurement_name: "Waist Circumference",
        average: 88,
        range: { start: 86, end: 90 },
      },
      Hip_Circumference: {
        measurement_name: "Hip Circumference",
        average: 98,
        range: { start: 96, end: 100 },
      },
      Thigh_Circumference: {
        measurement_name: "Thigh Circumference",
        average: 60,
        range: { start: 58, end: 62 },
      },
      Inseam_Length: {
        measurement_name: "Inseam Length",
        average: 80,
        range: { start: 78, end: 82 },
      },
      Arm_Length: {
        measurement_name: "Arm Length",
        average: 64,
        range: { start: 62, end: 66 },
      },
      Wrist_Circumference: {
        measurement_name: "Wrist Circumference",
        average: 18,
        range: { start: 17, end: 19 },
      },
      Height: {
        measurement_name: "Height",
        average: 175,
        range: { start: 170, end: 180 },
      },
      Bicep_Circumference: {
        measurement_name: "Bicep Circumference",
        average: 32,
        range: { start: 30, end: 34 },
      },
      Forearm_Circumference: {
        measurement_name: "Forearm Circumference",
        average: 28,
        range: { start: 26, end: 30 },
      },
      Torso_Length: {
        measurement_name: "Torso Length",
        average: 50,
        range: { start: 48, end: 52 },
      },
      Leg_Length: {
        measurement_name: "Leg Length",
        average: 100,
        range: { start: 98, end: 102 },
      },
      Foot_Length: {
        measurement_name: "Foot Length",
        average: 26,
        range: { start: 25, end: 27 },
      },
      Ankle_Circumference: {
        measurement_name: "Ankle Circumference",
        average: 22,
        range: { start: 21, end: 23 },
      },
      Hand_Length: {
        measurement_name: "Hand Length",
        average: 19,
        range: { start: 18, end: 20 },
      },
      Head_Circumference: {
        measurement_name: "Head Circumference",
        average: 58,
        range: { start: 56, end: 60 },
      },
    },
  },
  {
    name: "Very Very Large",
    short_name: "xxxl",
    unit: "inches",
    unit_code: "in",
    Weight: {
      measurement_name: "Weight",
      average: 75,
      range: { start: 70, end: 80 },
      unit: "libras",
      unit_code: "lbs",
    },
    measurements: {
      Neck_Circumference: {
        measurement_name: "Neck Circumference",
        average: 40,
        range: { start: 38, end: 42 },
      },
      Shoulder_Width: {
        measurement_name: "Shoulder Width",
        average: 48,
        range: { start: 46, end: 50 },
      },
      Chest_Circumference: {
        measurement_name: "Chest Circumference",
        average: 102,
        range: { start: 100, end: 104 },
      },
      Waist_Circumference: {
        measurement_name: "Waist Circumference",
        average: 88,
        range: { start: 86, end: 90 },
      },
      Hip_Circumference: {
        measurement_name: "Hip Circumference",
        average: 98,
        range: { start: 96, end: 100 },
      },
      Thigh_Circumference: {
        measurement_name: "Thigh Circumference",
        average: 60,
        range: { start: 58, end: 62 },
      },
      Inseam_Length: {
        measurement_name: "Inseam Length",
        average: 80,
        range: { start: 78, end: 82 },
      },
      Arm_Length: {
        measurement_name: "Arm Length",
        average: 64,
        range: { start: 62, end: 66 },
      },
      Wrist_Circumference: {
        measurement_name: "Wrist Circumference",
        average: 18,
        range: { start: 17, end: 19 },
      },
      Height: {
        measurement_name: "Height",
        average: 175,
        range: { start: 170, end: 180 },
      },
      Bicep_Circumference: {
        measurement_name: "Bicep Circumference",
        average: 32,
        range: { start: 30, end: 34 },
      },
      Forearm_Circumference: {
        measurement_name: "Forearm Circumference",
        average: 28,
        range: { start: 26, end: 30 },
      },
      Torso_Length: {
        measurement_name: "Torso Length",
        average: 50,
        range: { start: 48, end: 52 },
      },
      Leg_Length: {
        measurement_name: "Leg Length",
        average: 100,
        range: { start: 98, end: 102 },
      },
      Foot_Length: {
        measurement_name: "Foot Length",
        average: 26,
        range: { start: 25, end: 27 },
      },
      Ankle_Circumference: {
        measurement_name: "Ankle Circumference",
        average: 22,
        range: { start: 21, end: 23 },
      },
      Hand_Length: {
        measurement_name: "Hand Length",
        average: 19,
        range: { start: 18, end: 20 },
      },
      Head_Circumference: {
        measurement_name: "Head Circumference",
        average: 58,
        range: { start: 56, end: 60 },
      },
    },
  },
  {
    name: "Extremely Large",
    short_name: "xxxxl",
    unit: "inches",
    unit_code: "in",
    Weight: {
      measurement_name: "Weight",
      average: 75,
      range: { start: 70, end: 80 },
      unit: "libras",
      unit_code: "lbs",
    },
    measurements: {
      Neck_Circumference: {
        measurement_name: "Neck Circumference",
        average: 40,
        range: { start: 38, end: 42 },
      },
      Shoulder_Width: {
        measurement_name: "Shoulder Width",
        average: 48,
        range: { start: 46, end: 50 },
      },
      Chest_Circumference: {
        measurement_name: "Chest Circumference",
        average: 102,
        range: { start: 100, end: 104 },
      },
      Waist_Circumference: {
        measurement_name: "Waist Circumference",
        average: 88,
        range: { start: 86, end: 90 },
      },
      Hip_Circumference: {
        measurement_name: "Hip Circumference",
        average: 98,
        range: { start: 96, end: 100 },
      },
      Thigh_Circumference: {
        measurement_name: "Thigh Circumference",
        average: 60,
        range: { start: 58, end: 62 },
      },
      Inseam_Length: {
        measurement_name: "Inseam Length",
        average: 80,
        range: { start: 78, end: 82 },
      },
      Arm_Length: {
        measurement_name: "Arm Length",
        average: 64,
        range: { start: 62, end: 66 },
      },
      Wrist_Circumference: {
        measurement_name: "Wrist Circumference",
        average: 18,
        range: { start: 17, end: 19 },
      },
      Height: {
        measurement_name: "Height",
        average: 175,
        range: { start: 170, end: 180 },
      },
      Bicep_Circumference: {
        measurement_name: "Bicep Circumference",
        average: 32,
        range: { start: 30, end: 34 },
      },
      Forearm_Circumference: {
        measurement_name: "Forearm Circumference",
        average: 28,
        range: { start: 26, end: 30 },
      },
      Torso_Length: {
        measurement_name: "Torso Length",
        average: 50,
        range: { start: 48, end: 52 },
      },
      Leg_Length: {
        measurement_name: "Leg Length",
        average: 100,
        range: { start: 98, end: 102 },
      },
      Foot_Length: {
        measurement_name: "Foot Length",
        average: 26,
        range: { start: 25, end: 27 },
      },
      Ankle_Circumference: {
        measurement_name: "Ankle Circumference",
        average: 22,
        range: { start: 21, end: 23 },
      },
      Hand_Length: {
        measurement_name: "Hand Length",
        average: 19,
        range: { start: 18, end: 20 },
      },
      Head_Circumference: {
        measurement_name: "Head Circumference",
        average: 58,
        range: { start: 56, end: 60 },
      },
    },
  },
  // Add more male sizes as needed...
];

const defaultFemaleSizing = [
  {
    name: "Extra Extra Small",
    short_name: "xxs",
    unit: "inches",
    unit_code: "in",
    Weight: {
      measurement_name: "Weight",
      average: 75,
      range: { start: 70, end: 80 },
      unit: "libras",
      unit_code: "lbs",
    },
    measurements: {
      Neck_Circumference: {
        measurement_name: "Neck Circumference",
        average: 19,
        range: { start: 18, end: 20 },
      },
      Shoulder_Width: {
        measurement_name: "Shoulder Width",
        average: 13.5,
        range: { start: 12, end: 14 },
      },
      Bust_Circumference: {
        measurement_name: "Bust Circumference",
        average: 27,
        range: { start: 26, end: 28 },
      },
      Waist_Circumference: {
        measurement_name: "Waist Circumference",
        average: 22,
        range: { start: 21, end: 23 },
      },
      Hip_Circumference: {
        measurement_name: "Hip Circumference",
        average: 32,
        range: { start: 30, end: 33 },
      },
      Thigh_Circumference: {
        measurement_name: "Thigh Circumference",
        average: 56,
        range: { start: 54, end: 58 },
      },
      Inseam_Length: {
        measurement_name: "Inseam Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Arm_Length: {
        measurement_name: "Arm Length",
        average: 15.5,
        range: { start: 13, end: 16.5 },
      },
      Wrist_Circumference: {
        measurement_name: "Wrist Circumference",
        average: 6,
        range: { start: 5, end: 7 },
      },
      Height: {
        measurement_name: "Height",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Bicep_Circumference: {
        measurement_name: "Bicep Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Forearm_Circumference: {
        measurement_name: "Forearm Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Torso_Length: {
        measurement_name: "Torso Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Leg_Length: {
        measurement_name: "Leg Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Foot_Length: {
        measurement_name: "Foot Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Ankle_Circumference: {
        measurement_name: "Ankle Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Hand_Length: {
        measurement_name: "Hand Length",
        average: 20,
        range: { start: 19, end: 23 },
      },
      Head_Circumference: {
        measurement_name: "Head Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Underbust_Circumference: {
        measurement_name: "Underbust Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
    },
  },
  {
    name: "Extra Small",
    short_name: "xs",
    unit: "inches",
    unit_code: "in",
    Weight: {
      measurement_name: "Weight",
      average: 75,
      range: { start: 70, end: 80 },
      unit: "libras",
      unit_code: "lbs",
    },
    measurements: {
      Neck_Circumference: {
        measurement_name: "Neck Circumference",
        average: 20,
        range: { start: 19, end: 21 },
      },
      Shoulder_Width: {
        measurement_name: "Shoulder Width",
        average: 14,
        range: { start: 13, end: 14.5 },
      },
      Bust_Circumference: {
        measurement_name: "Bust Circumference",
        average: 27,
        range: { start: 28, end: 30 },
      },
      Waist_Circumference: {
        measurement_name: "Waist Circumference",
        average: 23.5,
        range: { start: 23, end: 25 },
      },
      Hip_Circumference: {
        measurement_name: "Hip Circumference",
        average: 33,
        range: { start: 32, end: 34 },
      },
      Thigh_Circumference: {
        measurement_name: "Thigh Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Inseam_Length: {
        measurement_name: "Inseam Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Arm_Length: {
        measurement_name: "Arm Length",
        average: 25,
        range: { start: 23, end: 26 },
      },
      Wrist_Circumference: {
        measurement_name: "Wrist Circumference",
        average: 6,
        range: { start: 5, end: 7 },
      },
      Height: {
        measurement_name: "Height",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Bicep_Circumference: {
        measurement_name: "Bicep Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Forearm_Circumference: {
        measurement_name: "Forearm Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Torso_Length: {
        measurement_name: "Torso Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Leg_Length: {
        measurement_name: "Leg Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Foot_Length: {
        measurement_name: "Foot Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Ankle_Circumference: {
        measurement_name: "Ankle Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Hand_Length: {
        measurement_name: "Hand Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Head_Circumference: {
        measurement_name: "Head Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Underbust_Circumference: {
        measurement_name: "Underbust Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
    },
  },
  {
    name: "Small",
    short_name: "s",
    unit: "inches",
    unit_code: "in",
    Weight: {
      measurement_name: "Weight",
      average: 75,
      range: { start: 70, end: 80 },
      unit: "libras",
      unit_code: "lbs",
    },
    measurements: {
      Neck_Circumference: {
        measurement_name: "Neck Circumference",
        average: 20,
        range: { start: 19, end: 21 },
      },
      Shoulder_Width: {
        measurement_name: "Shoulder Width",
        average: 14.5,
        range: { start: 14, end: 15 },
      },
      Bust_Circumference: {
        measurement_name: "Bust Circumference",
        average: 33,
        range: { start: 32, end: 34 },
      },
      Waist_Circumference: {
        measurement_name: "Waist Circumference",
        average: 25,
        range: { start: 24, end: 26.5 },
      },
      Hip_Circumference: {
        measurement_name: "Hip Circumference",
        average: 35,
        range: { start: 34, end: 36 },
      },
      Thigh_Circumference: {
        measurement_name: "Thigh Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Inseam_Length: {
        measurement_name: "Inseam Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Arm_Length: {
        measurement_name: "Arm Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Wrist_Circumference: {
        measurement_name: "Wrist Circumference",
        average: 6,
        range: { start: 5, end: 7 },
      },
      Height: {
        measurement_name: "Height",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Bicep_Circumference: {
        measurement_name: "Bicep Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Forearm_Circumference: {
        measurement_name: "Forearm Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Torso_Length: {
        measurement_name: "Torso Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Leg_Length: {
        measurement_name: "Leg Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Foot_Length: {
        measurement_name: "Foot Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Ankle_Circumference: {
        measurement_name: "Ankle Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Hand_Length: {
        measurement_name: "Hand Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Head_Circumference: {
        measurement_name: "Head Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Underbust_Circumference: {
        measurement_name: "Underbust Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
    },
  },
  {
    name: "Medium",
    short_name: "m",
    unit: "inches",
    unit_code: "in",
    Weight: {
      measurement_name: "Weight",
      average: 75,
      range: { start: 70, end: 80 },
      unit: "libras",
      unit_code: "lbs",
    },
    measurements: {
      Neck_Circumference: {
        measurement_name: "Neck Circumference",
        average: 20,
        range: { start: 21, end: 23 },
      },
      Shoulder_Width: {
        measurement_name: "Shoulder Width",
        average: 15.5,
        range: { start: 15, end: 16.5 },
      },
      Bust_Circumference: {
        measurement_name: "Bust Circumference",
        average: 37,
        range: { start: 36, end: 38 },
      },
      Waist_Circumference: {
        measurement_name: "Waist Circumference",
        average: 29,
        range: { start: 28, end: 30 },
      },
      Hip_Circumference: {
        measurement_name: "Hip Circumference",
        average: 39,
        range: { start: 38, end: 40 },
      },
      Thigh_Circumference: {
        measurement_name: "Thigh Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Inseam_Length: {
        measurement_name: "Inseam Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Arm_Length: {
        measurement_name: "Arm Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Wrist_Circumference: {
        measurement_name: "Wrist Circumference",
        average: 6,
        range: { start: 5, end: 7 },
      },
      Height: {
        measurement_name: "Height",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Bicep_Circumference: {
        measurement_name: "Bicep Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Forearm_Circumference: {
        measurement_name: "Forearm Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Torso_Length: {
        measurement_name: "Torso Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Leg_Length: {
        measurement_name: "Leg Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Foot_Length: {
        measurement_name: "Foot Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Ankle_Circumference: {
        measurement_name: "Ankle Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Hand_Length: {
        measurement_name: "Hand Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Head_Circumference: {
        measurement_name: "Head Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Underbust_Circumference: {
        measurement_name: "Underbust Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
    },
  },
  {
    name: "Large",
    short_name: "l",
    unit: "inches",
    unit_code: "in",
    Weight: {
      measurement_name: "Weight",
      average: 75,
      range: { start: 70, end: 80 },
      unit: "libras",
      unit_code: "lbs",
    },
    measurements: {
      Neck_Circumference: {
        measurement_name: "Neck Circumference",
        average: 21,
        range: { start: 20, end: 22 },
      },
      Shoulder_Width: {
        measurement_name: "Shoulder Width",
        average: 16.5,
        range: { start: 16, end: 17.5 },
      },
      Bust_Circumference: {
        measurement_name: "Bust Circumference",
        average: 41,
        range: { start: 40, end: 42 },
      },
      Waist_Circumference: {
        measurement_name: "Waist Circumference",
        average: 33,
        range: { start: 32, end: 34 },
      },
      Hip_Circumference: {
        measurement_name: "Hip Circumference",
        average: 43,
        range: { start: 42, end: 44 },
      },
      Thigh_Circumference: {
        measurement_name: "Thigh Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Inseam_Length: {
        measurement_name: "Inseam Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Arm_Length: {
        measurement_name: "Arm Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Wrist_Circumference: {
        measurement_name: "Wrist Circumference",
        average: 8,
        range: { start: 5, end: 7 },
      },
      Height: {
        measurement_name: "Height",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Bicep_Circumference: {
        measurement_name: "Bicep Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Forearm_Circumference: {
        measurement_name: "Forearm Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Torso_Length: {
        measurement_name: "Torso Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Leg_Length: {
        measurement_name: "Leg Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Foot_Length: {
        measurement_name: "Foot Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Ankle_Circumference: {
        measurement_name: "Ankle Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Hand_Length: {
        measurement_name: "Hand Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Head_Circumference: {
        measurement_name: "Head Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Underbust_Circumference: {
        measurement_name: "Underbust Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
    },
  },
  {
    name: "Extra Large",
    short_name: "xl",
    unit: "inches",
    unit_code: "in",
    Weight: {
      measurement_name: "Weight",
      average: 75,
      range: { start: 70, end: 80 },
      unit: "libras",
      unit_code: "lbs",
    },
    measurements: {
      Neck_Circumference: {
        measurement_name: "Neck Circumference",
        average: 22,
        range: { start: 20, end: 23 },
      },
      Shoulder_Width: {
        measurement_name: "Shoulder Width",
        average: 17.5,
        range: { start: 16.5, end: 18 },
      },
      Bust_Circumference: {
        measurement_name: "Bust Circumference",
        average: 45,
        range: { start: 44, end: 46 },
      },
      Waist_Circumference: {
        measurement_name: "Waist Circumference",
        average: 37,
        range: { start: 36, end: 38 },
      },
      Hip_Circumference: {
        measurement_name: "Hip Circumference",
        average: 47,
        range: { start: 46, end: 48 },
      },
      Thigh_Circumference: {
        measurement_name: "Thigh Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Inseam_Length: {
        measurement_name: "Inseam Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Arm_Length: {
        measurement_name: "Arm Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Wrist_Circumference: {
        measurement_name: "Wrist Circumference",
        average: 7,
        range: { start: 6, end: 8 },
      },
      Height: {
        measurement_name: "Height",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Bicep_Circumference: {
        measurement_name: "Bicep Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Forearm_Circumference: {
        measurement_name: "Forearm Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Torso_Length: {
        measurement_name: "Torso Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Leg_Length: {
        measurement_name: "Leg Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Foot_Length: {
        measurement_name: "Foot Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Ankle_Circumference: {
        measurement_name: "Ankle Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Hand_Length: {
        measurement_name: "Hand Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Head_Circumference: {
        measurement_name: "Head Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Underbust_Circumference: {
        measurement_name: "Underbust Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
    },
  },
  {
    name: "Extra Extra Large",
    short_name: "xxl",
    unit: "inches",
    unit_code: "in",
    Weight: {
      measurement_name: "Weight",
      average: 75,
      range: { start: 70, end: 80 },
      unit: "libras",
      unit_code: "lbs",
    },
    measurements: {
      Neck_Circumference: {
        measurement_name: "Neck Circumference",
        average: 22,
        range: { start: 20, end: 23 },
      },
      Shoulder_Width: {
        measurement_name: "Shoulder Width",
        average: 18.5,
        range: { start: 18, end: 19 },
      },
      Bust_Circumference: {
        measurement_name: "Bust Circumference",
        average: 46,
        range: { start: 45, end: 47 },
      },
      Waist_Circumference: {
        measurement_name: "Waist Circumference",
        average: 38,
        range: { start: 37, end: 39 },
      },
      Hip_Circumference: {
        measurement_name: "Hip Circumference",
        average: 48,
        range: { start: 47, end: 49 },
      },
      Thigh_Circumference: {
        measurement_name: "Thigh Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Inseam_Length: {
        measurement_name: "Inseam Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Arm_Length: {
        measurement_name: "Arm Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Wrist_Circumference: {
        measurement_name: "Wrist Circumference",
        average: 7,
        range: { start: 6, end: 8 },
      },
      Height: {
        measurement_name: "Height",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Bicep_Circumference: {
        measurement_name: "Bicep Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Forearm_Circumference: {
        measurement_name: "Forearm Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Torso_Length: {
        measurement_name: "Torso Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Leg_Length: {
        measurement_name: "Leg Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Foot_Length: {
        measurement_name: "Foot Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Ankle_Circumference: {
        measurement_name: "Ankle Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Hand_Length: {
        measurement_name: "Hand Length",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Head_Circumference: {
        measurement_name: "Head Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
      Underbust_Circumference: {
        measurement_name: "Underbust Circumference",
        average: 0,
        range: { start: 0, end: 0 },
      },
    },
  },
  {
    name: "Very Large",
    short_name: "xxxl",
    unit: "inches",
    unit_code: "in",
    Weight: {
      measurement_name: "Weight",
      average: 75,
      range: { start: 70, end: 80 },
      unit: "libras",
      unit_code: "lbs",
    },
    measurements: {
      Neck_Circumference: {
        measurement_name: "Neck Circumference",
        average: 35,
        range: { start: 34, end: 36 },
      },
      Shoulder_Width: {
        measurement_name: "Shoulder Width",
        average: 44,
        range: { start: 42, end: 46 },
      },
      Bust_Circumference: {
        measurement_name: "Bust Circumference",
        average: 90,
        range: { start: 88, end: 92 },
      },
      Waist_Circumference: {
        measurement_name: "Waist Circumference",
        average: 72,
        range: { start: 70, end: 74 },
      },
      Hip_Circumference: {
        measurement_name: "Hip Circumference",
        average: 96,
        range: { start: 94, end: 98 },
      },
      Thigh_Circumference: {
        measurement_name: "Thigh Circumference",
        average: 56,
        range: { start: 54, end: 58 },
      },
      Inseam_Length: {
        measurement_name: "Inseam Length",
        average: 76,
        range: { start: 74, end: 78 },
      },
      Arm_Length: {
        measurement_name: "Arm Length",
        average: 60,
        range: { start: 58, end: 62 },
      },
      Wrist_Circumference: {
        measurement_name: "Wrist Circumference",
        average: 16,
        range: { start: 15, end: 17 },
      },
      Height: {
        measurement_name: "Height",
        average: 165,
        range: { start: 160, end: 170 },
      },
      Bicep_Circumference: {
        measurement_name: "Bicep Circumference",
        average: 28,
        range: { start: 26, end: 30 },
      },
      Forearm_Circumference: {
        measurement_name: "Forearm Circumference",
        average: 24,
        range: { start: 22, end: 26 },
      },
      Torso_Length: {
        measurement_name: "Torso Length",
        average: 45,
        range: { start: 43, end: 47 },
      },
      Leg_Length: {
        measurement_name: "Leg Length",
        average: 95,
        range: { start: 93, end: 97 },
      },
      Foot_Length: {
        measurement_name: "Foot Length",
        average: 24,
        range: { start: 23, end: 25 },
      },
      Ankle_Circumference: {
        measurement_name: "Ankle Circumference",
        average: 20,
        range: { start: 19, end: 21 },
      },
      Hand_Length: {
        measurement_name: "Hand Length",
        average: 18,
        range: { start: 17, end: 19 },
      },
      Head_Circumference: {
        measurement_name: "Head Circumference",
        average: 56,
        range: { start: 54, end: 58 },
      },
      Underbust_Circumference: {
        measurement_name: "Underbust Circumference",
        average: 75,
        range: { start: 73, end: 77 },
      },
    },
  },
  {
    name: "Extremely Large",
    short_name: "xxxxl",
    unit: "inches",
    unit_code: "in",
    Weight: {
      measurement_name: "Weight",
      average: 75,
      range: { start: 70, end: 80 },
      unit: "libras",
      unit_code: "lbs",
    },
    measurements: {
      Neck_Circumference: {
        measurement_name: "Neck Circumference",
        average: 35,
        range: { start: 34, end: 36 },
      },
      Shoulder_Width: {
        measurement_name: "Shoulder Width",
        average: 44,
        range: { start: 42, end: 46 },
      },
      Bust_Circumference: {
        measurement_name: "Bust Circumference",
        average: 90,
        range: { start: 88, end: 92 },
      },
      Waist_Circumference: {
        measurement_name: "Waist Circumference",
        average: 72,
        range: { start: 70, end: 74 },
      },
      Hip_Circumference: {
        measurement_name: "Hip Circumference",
        average: 96,
        range: { start: 94, end: 98 },
      },
      Thigh_Circumference: {
        measurement_name: "Thigh Circumference",
        average: 56,
        range: { start: 54, end: 58 },
      },
      Inseam_Length: {
        measurement_name: "Inseam Length",
        average: 76,
        range: { start: 74, end: 78 },
      },
      Arm_Length: {
        measurement_name: "Arm Length",
        average: 60,
        range: { start: 58, end: 62 },
      },
      Wrist_Circumference: {
        measurement_name: "Wrist Circumference",
        average: 16,
        range: { start: 15, end: 17 },
      },
      Height: {
        measurement_name: "Height",
        average: 165,
        range: { start: 160, end: 170 },
      },
      Bicep_Circumference: {
        measurement_name: "Bicep Circumference",
        average: 28,
        range: { start: 26, end: 30 },
      },
      Forearm_Circumference: {
        measurement_name: "Forearm Circumference",
        average: 24,
        range: { start: 22, end: 26 },
      },
      Torso_Length: {
        measurement_name: "Torso Length",
        average: 45,
        range: { start: 43, end: 47 },
      },
      Leg_Length: {
        measurement_name: "Leg Length",
        average: 95,
        range: { start: 93, end: 97 },
      },
      Foot_Length: {
        measurement_name: "Foot Length",
        average: 24,
        range: { start: 23, end: 25 },
      },
      Ankle_Circumference: {
        measurement_name: "Ankle Circumference",
        average: 20,
        range: { start: 19, end: 21 },
      },
      Hand_Length: {
        measurement_name: "Hand Length",
        average: 18,
        range: { start: 17, end: 19 },
      },
      Head_Circumference: {
        measurement_name: "Head Circumference",
        average: 56,
        range: { start: 54, end: 58 },
      },
      Underbust_Circumference: {
        measurement_name: "Underbust Circumference",
        average: 75,
        range: { start: 73, end: 77 },
      },
    },
  },
  // Add more female sizes as needed...
];

const createDefaultSizing = async () => {
  try {
    const mongoUri = process.env.MONGO_URL;

    if (!mongoUri) {
      throw new Error("MONGO_URL is not defined in the environment variables.");
    }

    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Check if sizing data already exists
    // const existingSizing = await Size.findOne();
    // if (existingSizing) {
    //   console.log("Sizing data already exists.");
    //   return;
    // }

    // Create new sizing data
    const sizing = new Size({
      sizing_type: "metric",
      male: defaultMaleSizing,
      female: defaultFemaleSizing,
    });

    await sizing.save();
    console.log("Default sizing data created successfully.");
  } catch (error) {
    console.error("Error creating default sizing data:", error);
  } finally {
    mongoose.connection.close();
  }
};

createDefaultSizing();
