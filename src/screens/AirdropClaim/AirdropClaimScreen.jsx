import React, { Component } from 'react';

export default class AirdropClaimScreen extends Component {

  // TODO: verify that these two functions work correctly
  confirmClaim() {
    let confirmForm = document.getElementById("airdropConfirmForm");
    let proofstring = document.getElementById("proof").value;
    let successMessage = document.getElementById("successMessage");
    let svg = document.getElementById("svg");

    console.log(proofstring);

    const xhr = new XMLHttpRequest();

    var data = new FormData();
    data.append("proof", proofstring);

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        confirmForm.style.display = "none";
        successMessage.style.display = "block";
        svg.classList.add("active");
      } else if (xhr.readyState === 4 && xhr.status >= 400) {
        // error.innerHTML = xhr.responseText;
      }
    };

    xhr.open("POST", "/submitclaim?confirm=true");
    xhr.send(data);
  }

  submitClaim() {
    let submitForm = document.getElementById("airdropSubmitForm");
    let confirmForm = document.getElementById("airdropConfirmForm");
    let error = document.getElementById("airdropError");
    let addressInputControl = document.getElementById("airdropAddressControl");

    const xhr = new XMLHttpRequest();

    let address = document.getElementById("airdropAddress").value;

    //Check for bad address values
    if (address === "") {
      error.innerHTML = "Please enter an address";
      return;
    }

    //Build form data.
    var data = new FormData();
    data.append("addr", address);

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 2 || xhr.readyState === 3) {
        addressInputControl.classList.add("is-loading");
      } else if (xhr.readyState === 4 && xhr.status === 200) {
        addressInputControl.classList.remove("is-loading");
        let data = JSON.parse(xhr.responseText)
        let proofstring = data.proof;
        //Hide Submit Form
        submitForm.style.display = "none";
        confirmForm.style.display = "block";
        document.getElementById('proof').value = proofstring;

      } else if (xhr.readyState === 4 && xhr.status >= 400) {
        addressInputControl.classList.remove("is-loading");
        error.innerHTML = xhr.responseText;
      }
    };
    xhr.open("POST", "/submitclaim");
    xhr.send(data);
  }


  render() {
    return (
      <span className="contentContainer">
        <span className="card">
          <header className="card-header">
            <h1 className="header-title">Claim Your Airdrop</h1>
          </header>
          <span className="card-content">
            <span className="columns">
              <span className="column is-half">
                <span className="control">
                  <label htmlFor="claim" className="radio">
                    <input type="radio" name="claim" checked/>
                    Faucet
                  </label>
                  {/* br
                  label.radio
                    input(name="claim" type="radio")
                    | Github
                  br
                  label.radio
                    input(name="claim" type="radio")
                    | Web of Trust PGP
                  br
                  label.radio
                    input(name="claim" type="radio")
                    | Sponsor/Investor */}
                </span>
              </span>
              <span className="column is-half">
                <span className="airdropClaimContainer">
                  <h2 className="airdropTitle">Claim your faucet HNS</h2>
                  <span className="airdropDescription">This will first generate your proof for the airdrop. You can either submit that proof yourself, or submit through HNScan. Once your proof has been submitted and mined, the HNS is deposited into the address associated with the private key provided to you in the faucet. We do not have access to your HNS, we are simply processing the claim for you.</span>
                  <p className="error" id="airdropError"></p>
                  <form onSubmit={this.submitClaim} id="airdropSubmitForm">
                    <span className="control" id="airdropAddressContr"></span>
                    <input placeholder="Provided HNS Address" class="input" id="airdropAddress" />
                    <input value="Confirm Claim" type="submit" class="button is-rounded airdropButton" />
                  </form>
                  <form onsubmit={this.confirmClaim} id="airdropConfirmForm">
                    <textarea className="textarea" id="proof" disabled />
                    <input value="Send Claim" type="submit" className="button is-rounded airdropButton" />
                  </form>
                  <span className="successMessage" id="successMessage"></span>
                  <svg className="checkmark" id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" width="70">
                    <circle className="checkmarkCircle" cx="26" cy="26" r="23" fill="none" />
                    <path className="checkmarkCheck" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                  </svg>
                  <span>Your airdrop claim has been submitted!</span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>

    );
  }
}
