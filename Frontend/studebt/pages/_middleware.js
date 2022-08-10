import { NextRequest, NextResponse } from 'next/server'
import { getCurrentUser } from '../services/authService';

export async function middleware(NextRequest) {
    // const user = await getCurrentUser()
    let token = NextRequest.cookies.token || false;
    const response = NextResponse.next()
    let user = false;

    if (token) {
        user = await getCurrentUser(token);
    }
    
    if(user) {
    //  set cookie in next response
        response.cookie('authenticated', true, {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            httpOnly: true,
            secure: true,
            sameSite: 'strict'
        });

        response.cookie('user', JSON.stringify(user), {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            httpOnly: true,
            secure: true,
            sameSite: 'strict'
        });

    } else {
        response.cookie('user', false, {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            httpOnly: true,
            secure: true,
            sameSite: 'strict'
        });
        
        response.cookie('authenticated', false, {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            httpOnly: true,
            secure: true,
            sameSite: 'strict'
        });
    }

    return response;

}