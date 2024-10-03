import bcrypt from "bcrypt" ;
import express from "express";

export const hashPassword = async(password)=>{
    try {
        const hashedPassword = await bcrypt.hash( password ,10 ) ;
        return hashedPassword ;
    } catch (error) {
        console.log(error) ;
    }
} ;

export const comparePassword = async (password , hashedPassword)=>{
    return await bcrypt.compare(password , hashedPassword) ;
}

// export default {hashPassword , comparePassword } ;
