// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract Resume-db {
  /* variables
  canididate name
  candidate email
  candidate eth account
  bool candidate invited to interview


  */
  address hiringManager;

  struct Candidate {
    string name;
    string email;
    bool invitedToInterview;
    address ethAccount;
  }
  
  //constructor

  /*functtions
  register as candidte
  register as hiring mgr
  get list of candidates for mgr
  invite candidate to interview
  offere candidate job offer

  */
  
  
}
