import React from "react";
import { CTA } from './CTA';
import { Hero } from './Hero';
import { Investment } from './Investment';
import { MobileSol } from './MobileSol';
import { OneStop } from './OneStop';
import { Savings } from './Savings';
import { ThreeFeatures } from './ThreeFeatures';
import { WebSol } from './WebSol';

export const Section = () => {
    return (
        <div>
            <Hero></Hero>
            <OneStop></OneStop>
            <ThreeFeatures></ThreeFeatures>
            <MobileSol></MobileSol>
            <WebSol></WebSol>
            <Savings></Savings>
            <Investment></Investment>
            <CTA></CTA>
        </div>
)
}