var i = 0
    for (i = 0; i < newJobs.length; i++) {
    	document.getElementsByClassName("job")[i].innerHTML="<div class='parallax'style='background-image: url("+newJobs[i].Picture+")'><div class='imags'></div></div><div class='text'><p><h2>Position: "+newJobs[i].Position+"</h2></p><br><p><b>Schedule: </b>"+newJobs[i].Schedule+"</p><p><b>Company: </b>"+newJobs[i].CompanyName+"</p><p><b>Contact: </b>"+newJobs[i].Contact+"</p><p><b>Location: </b>"+newJobs[i].Location+"</p><p><b>Salary: </b>"+newJobs[i].Salary+"</p><br><p><b>Description: </b>"+newJobs[i].Description+"</p></div>";
    

    }


