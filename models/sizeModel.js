const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the measurement schema
const MeasurementSchema = new Schema({
    measurement_name: {
        type: String,
        required: true
    },
    average: {
        type: Number,
        required: true
    },
    range: {
        start: {
            type: Number,
            required: true
        },
        end: {
            type: Number,
            required: true
        }
    },
});

// Define the male sizing schema
const MaleSizeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    short_name: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    unit_code: {
        type: String,
        required: true
    },
    Weight: {
        measurement_name: {
            type: String,
            required: true
        },
        average: {
            type: Number,
            required: true
        },
        range: {
            start: {
                type: Number,
                required: true
            },
            end: {
                type: Number,
                required: true
            }
        },
        unit: {
            type: String,
            required: true
        },
        unit_code: {
            type: String,
            required: true
        },
    },
    measurements: {
        Neck_Circumference: MeasurementSchema,
        Shoulder_Width: MeasurementSchema,
        Chest_Circumference: MeasurementSchema,
        Waist_Circumference: MeasurementSchema,
        Hip_Circumference: MeasurementSchema,
        Thigh_Circumference: MeasurementSchema,
        Inseam_Length: MeasurementSchema,
        Arm_Length: MeasurementSchema,
        Wrist_Circumference: MeasurementSchema,
        Height: MeasurementSchema,
        Bicep_Circumference: MeasurementSchema,
        Forearm_Circumference: MeasurementSchema,
        Torso_Length: MeasurementSchema,
        Leg_Length: MeasurementSchema,
        Foot_Length: MeasurementSchema,
        Ankle_Circumference: MeasurementSchema,
        Hand_Length: MeasurementSchema,
        Head_Circumference: MeasurementSchema
    },
    gender: {
        type: String,
        default: "male", // Default to male
    }
});

// Define the female sizing schema
const FemaleSizeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    short_name: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    unit_code: {
        type: String,
        required: true
    },
    Weight: {
        measurement_name: {
            type: String,
            required: true
        },
        average: {
            type: Number,
            required: true
        },
        range: {
            start: {
                type: Number,
                required: true
            },
            end: {
                type: Number,
                required: true
            }
        },
        unit: {
            type: String,
            required: true
        },
        unit_code: {
            type: String,
            required: true
        },
    },
    measurements: {
        Neck_Circumference: MeasurementSchema,
        Shoulder_Width: MeasurementSchema,
        Bust_Circumference: MeasurementSchema,
        Waist_Circumference: MeasurementSchema,
        Hip_Circumference: MeasurementSchema,
        Thigh_Circumference: MeasurementSchema,
        Inseam_Length: MeasurementSchema,
        Arm_Length: MeasurementSchema,
        Wrist_Circumference: MeasurementSchema,
        Height: MeasurementSchema,
        Weight: MeasurementSchema,
        Bicep_Circumference: MeasurementSchema,
        Forearm_Circumference: MeasurementSchema,
        Torso_Length: MeasurementSchema,
        Leg_Length: MeasurementSchema,
        Foot_Length: MeasurementSchema,
        Ankle_Circumference: MeasurementSchema,
        Hand_Length: MeasurementSchema,
        Head_Circumference: MeasurementSchema,
        Underbust_Circumference: MeasurementSchema // added for female
    },
    gender: {
        type: String,
        default: "female", // Default to female
    }
});

// Define the overall size schema
const SizeSchema = new Schema({
    sizing_type: {
        type: String,
        enum: ['mixed', 'imperial', 'metric'],
        required: true
    },
    male: [MaleSizeSchema],
    female: [FemaleSizeSchema]
});

// Middleware to set units before saving
SizeSchema.pre('save', function(next) {
    const defaultUnits = {
        Imperial: { unit: 'inches', unit_code: 'in' },
        Metric: { unit: 'centimeters', unit_code: 'cm' }
    };

    if (this.sizing_type === 'Imperial' || this.sizing_type === 'Metric') {
        const { unit, unit_code } = defaultUnits[this.sizing_type];
        
        // Update male measurements
        this.male.forEach(size => {
            size.unit = unit;
            size.unit_code = unit_code;
        });

        // Update female measurements
        this.female.forEach(size => {
            size.unit = unit;
            size.unit_code = unit_code;
        });
    }
    next();
});

// Export the Size model
module.exports = mongoose.model('Size', SizeSchema);
