import { Controller } from "@hotwired/stimulus";
import Swal from "sweetalert2";

// Connects to data-controller="alert"
export default class extends Controller {

  static targets = ["link"]

  connect() {
    console.log("hi from alert"); 
  }

  show(event) {
    event.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      console.log(result);
      
      if (result.isConfirmed) {
        this.linkTarget.click()
      }
    });
  }

}
