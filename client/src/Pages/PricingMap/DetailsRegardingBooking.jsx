
import React, { useEffect, useState } from 'react';
import { Typography, Divider, Button, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import axios from 'axios';
import Loader from '../../Components/Loader';

const DetailsRegardingBooking = () => {
  const {Title}=useSelector(state=>state.serviceReducer);
  const dispatch=useDispatch();
  const [serviceOptions, setServiceOptions] = useState([]);
  const [queryAnswered,setQueryAnswered]=useState(0);
  const [sections,setSections]=useState([]);
  
  useEffect(()=>{
    fetchAdditionalDetails()
  },[])
  const fetchAdditionalDetails=async()=>{
    try {
      const {data:{allAdditionalInfo}}=await axios.get("http://localhost:4000/api/v1/additionalDetails");
      console.log(allAdditionalInfo)
      setSections(allAdditionalInfo);
    } catch (error) {
      console.log(error);
    }
  }
  
 
  const convertArrayToObject = (array) => {
    return array.reduce((result, currentObject) => {
      return { ...result, ...currentObject };
    }, {});
  }
 
 const handleSubmit=(totalQuery)=>{
   if(queryAnswered !== totalQuery){
      toast.error("Fill all fields...");
      return;
   }
  
  const singleObject = convertArrayToObject(serviceOptions);
  dispatch({ type: "addOtherServiceOptions", payload: singleObject });
 }
const handleOptionClick = (heading, label) => {
  
  const isAlreadySelected = serviceOptions.some(option => Object.keys(option)[0] === heading);
    let updatedOptions;
    if (isAlreadySelected) {
      updatedOptions = serviceOptions.map(option => {
        if (Object.keys(option)[0] === heading) {
          return { [heading]: label };
        }
        return option;
      });
    } else {
      updatedOptions = [...serviceOptions, { [heading]: label }];
      setQueryAnswered(queryAnswered + 1);
    }
    setServiceOptions(updatedOptions);
};
if (!sections) return <Loader />
  const renderData = (section) => {
      const noOfQueries=section.subsections.length;
      if(Title.toLowerCase()===section.title.toLowerCase()) {
      return (
        <div key={section.title}>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            {section.title}
          </Typography>
          {section.subsections.map((subsection, subIndex) => (
            <div key={subIndex}>
              <Typography variant="h6" gutterBottom>
                {subsection.heading}
              </Typography>
              {subsection.subHeading && (
                <Typography variant="body2" color="textSecondary">
                  {subsection.subHeading}
                </Typography>
              )}
              {subsection.data && (
                <div style={{ display: 'flex', marginTop: '20px' }}>
                  {subsection.data.map((button, buttonIndex) => (
                    <Button
                      key={buttonIndex}
                      variant="text"
                      color="primary"
                      onClick={() => handleOptionClick(subsection.heading, button.label)}
                      style={{
                        border: '2px solid black',
                        borderColor: '#e7e7e7',
                        marginBottom: '1rem',
                        backgroundColor: serviceOptions.some(option => option[subsection.heading] === button.label) ? 'rgb(0,0,0)' : 'white',
                        color: serviceOptions.some(option => option[subsection.heading] === button.label) ? 'white' : '#454545'
                      }}
                      sx={{
                        marginRight: '10px',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 0, 0, 0.04)',
                          borderColor: '#454545',
                          color: '#454545',
                        },
                        borderColor: '#454545',
                        color: '#454545',
                      }}
                    >
                      {button.label}
                    </Button>
                  ))}
                </div>
              )}
              {subsection.inBox && (
                <Box
                  sx={{
                    border: '2px solid black',
                    borderRadius: '8px',
                    padding: '20px',
                    marginTop: '20px',
                    borderColor: '#e7e7e7',
                  }}
                >
                  <Typography variant="h6" gutterBottom fontWeight="bold">
                    {subsection.headingBox}
                  </Typography>
                  {subsection.dataBox.map((content, contentIndex) => (
                    <div key={contentIndex}>
                      {content.subHeading && (
                        <Typography variant="subtitle1" gutterBottom>
                          {content.subHeading}
                        </Typography>
                      )}
                      {content.description && (
                        <Typography variant="body2" color="textSecondary">
                          {content.description}
                        </Typography>
                      )}
                    </div>
                  ))}
                </Box>
              )}
              {subIndex < section.subsections.length - 1 && (
                <Divider sx={{ width: '100%', marginLeft: '0', marginBottom: '1', marginTop: '1' }} />
              )}
            </div>
          ))}
          <Button variant="contained" color="primary" style={{marginTop:'20px',opacity:(noOfQueries!==queryAnswered)?0.5:1}} onClick={()=>handleSubmit(noOfQueries)}>
            Proceed
          </Button>
          
        </div>
      );
    }
   
  };
  return (
    <div style={{ padding: '20px' }}>
      {sections.map((section) => renderData(section))}
      
    </div>
  );
};

export default DetailsRegardingBooking;