import { dbConnection } from "/src/dbConnection/dbConnection.js";
import User from "/src/Model/userModel.js"; 
import { NextRequest, NextResponse } from "next/server";

dbConnection();

export async function POST(NextRequest) {
    try {
        const reqBody = await NextRequest.json();
        const { firstName, lastName, email, password } = reqBody;

        console.log(reqBody);

        const user = await User.findOne({ email });

        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        const newUser = new User({ firstName, lastName, email, password }); // Note: I removed lastName as it was not defined
        const savedUser = await newUser.save();
        console.log(savedUser);

        return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
