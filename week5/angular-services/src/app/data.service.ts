import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  getDataIt():any{
  return [
 {
  "name":"TCS",
  "departments":"CSE,IT,MECH,EEE,ECE" 
 },
 {
  "name":"WIPRO",
  "departments":"CSE,IT,MECH,EEE,ECE"
 },
 {
  "name":"AMAZON",
  "departments":"CSE,IT"
 },
 {
  "name":"BERKADIA",
  "departments":"CSE,IT,ECE"
 }
 {
  "name":"COGNIZANT",
  "departments":"CSE,IT,MECH,EEE,ECE" 
 },
 {
  "name":"VALUE LABS",
  "departments":"CSE,IT,ECE" 
 },
 {
  "name":"HCL",
  "departments":"CSE,IT,MECH,EEE,ECE" 
 }
  ]
  }
  getDataMarketing():any{
    return [
   {
    "name":"BYJUS",
    "departments":"CSE,IT,MECH,EEE,ECE"
   },
   {
    "name":"JARO",
    "departments":"CSE,IT,MECH,EEE,ECE"
   },
   {
    "name":"EXTRAMARKS",
    "departments":"CSE,IT,MECH,EEE,ECE"
   }
   {
    "name":"ENHISECURE",
    "departments":"CSE,IT,MECH,EEE,ECE" 
   },
   {
    "name":"CGI TECHNOLOGIES",
    "departments":"CSE,IT,MECH,EEE,ECE" 
   },
   {
    "name":"PROLIFICS",
    "departments":"CSE,IT,MECH,EEE,ECE" 
   }
  ]
    }
}
