import { useState } from 'react'
import {Bookmark} from 'lucide-react'
import Card from './Components/Card'

function App() {
  const jobListings = [
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hour",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hour",
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hour",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$68/hour",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "6 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$60/hour",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "1 day ago",
    post: "UI/UX Designer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$55/hour",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "4 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hour",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$50/hour",
    location: "San Jose, USA"
  }
];


  return (
    <>
    <div className="parent">
      {
        jobListings.map((elem)=>{
            return <Card logo={elem.brandLogo} company={elem.companyName} date={elem.datePosted} post={elem.post} tag1 = {elem.tag1} tag2 = {elem.tag2} pay ={elem.pay} location={elem.location}/>
        })
      }
    </div>
    </>
  )
}

export default App
