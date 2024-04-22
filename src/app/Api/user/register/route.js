import { dbConnection } from "/src/dbConnection/dbConnection.js";
import User from "/src/Model/userModel.js"; 
import { NextRequest, NextResponse } from "next/server";

dbConnection();

export async function POST(NextRequest) {
    try {
        const reqBody = await NextRequest.json();
        const { fullname, email, password } = reqBody;

        console.log(reqBody);

        const user = await User.findOne({ email });

        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        const newUser = new User({ fullname, email, password }); // Note: I removed lastName as it was not defined
        const savedUser = await newUser.save();
        console.log(savedUser);

        return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}



// import dbConnection from "@dbConnection/dbConnection";
// import User from "@Model/userModel";
// import { NextRequest, NextResponse } from "next/server";

// // Establish database connection
// dbConnection();

// export async function POST(NextRequest) {
//     try {
//         const reqBody = await NextRequest.json();
//         const { firstName, lastName, email, password } = reqBody;

//         console.log(reqBody);

//         // Check if user already exists
//         const existingUser = await User.findOne({ email });

//         if (existingUser) {
//             return NextResponse.json({ error: "User already exists" }, { status: 400 });
//         }

//         // Create new user
//         const newUser = new User({
//             firstName,
//             lastName,
//             email,
//             password, // Note: Make sure to hash the password before saving it to the database for security reasons
//         });

//         // Save the new user to the database
//         await newUser.save();

//         return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
//     } catch (error) {
//         console.error(error);
//         return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//     }
// }
