import React, { useState } from 'react';
import { Typography, Divider, Button, Box } from '@mui/material';
import { useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
const DetailsRegardingBooking = () => {
  const {Title}=useSelector(state=>state.serviceReducer);
  const dispatch=useDispatch();
  const [serviceOptions, setServiceOptions] = useState([]);
  const [queryAnswered,setQueryAnswered]=useState(0);
  
  const sections = [
    {
      title: 'Cleaning',
      subsections: [
        {
          heading: 'Select House Size',
          subHeading: 'Select 1 out of 4 options',
          data: [
            { label: '1 bhk', onClick: () => alert('Button 1 clicked') },
            { label: '2 bhk', onClick: () => alert('Button 2 clicked') },
            { label: '3 bhk(less than 2000sqft)', onClick: () => alert('Button 3 clicked') },
            { label: '4 bhk(less than 4000sqft)', onClick: () => alert('Button 3 clicked') },
          ],
        },
        {
          heading: 'How many such Floors?',
          subHeading: 'Select 1 out of 4 options',
          data: [
            { label: '1 floor Only', onClick: () => alert('Button 1 clicked') },
            { label: '2 floor', onClick: () => alert('Button 2 clicked') },
            { label: '3 floor', onClick: () => alert('Button 3 clicked') },
            { label: '4 floor', onClick: () => alert('Button 3 clicked') },
          ],
        },
        {
          heading: 'Do you have Dogs?',
          subHeading: 'Select 1 out of 2 options',
          data: [
            { label: 'Yes', onClick: () => alert('Button 1 clicked') },
            { label: 'No', onClick: () => alert('Button 2 clicked') },
          ],
        },
      ],
    },
    
    {
      title: 'Cooking',
      subsections: [
        {
          heading: 'How many People?',
          subHeading: 'Select 1 out of 6 options',
          data: [
            { label: '1 person', onClick: () => alert('Button 1 clicked') },
            { label: '2 people', onClick: () => alert('Button 2 clicked') },
            { label: '3 people', onClick: () => alert('Button 3 clicked') },
            { label: '4 people', onClick: () => alert('Button 4 clicked') },
            { label: '5-6 people', onClick: () => alert('Button 5 clicked') },
            { label: '7-8 people', onClick: () => alert('Button 6 clicked') },
          ],
        },
        {
          heading: 'How many meals per day?',
          subHeading: 'Select 1 out of 3 options',
          data: [
            { label: 'BreakFast And Lunch', onClick: () => alert('Button 1 clicked') },
            { label: 'Dinner', onClick: () => alert('Button 2 clicked') },
            { label: 'All Three Meals', onClick: () => alert('Button 3 clicked') }
          ],
        },
        {
          heading: 'Veg/Non Veg',
          subHeading: 'Select 1 out of 2 options',
          data: [
            { label: 'Veg Food Only', onClick: () => alert('Button 1 clicked') },
            { label: 'Veg+Non Veg', onClick: () => alert('Button 2 clicked') }
          ],
        },
        {
          heading: 'Do you have Dogs?',
          subHeading: 'Select 1 out of 2 options',
          data: [
            { label: 'Yes', onClick: () => alert('Button 1 clicked') },
            { label: 'No', onClick: () => alert('Button 2 clicked') },
          ],
        }
      ],
    },
    {
      title: 'Nanny',
      subsections: [
        {
          heading: 'How many Children?',
          subHeading: 'Select 1 out of 4 options',
          data: [
            { label: '1 child', onClick: () => alert('Button 1 clicked') },
            { label: '2 child', onClick: () => alert('Button 2 clicked') },
            { label: '3 child', onClick: () => alert('Button 3 clicked') },
            { label: '4 child', onClick: () => alert('Button 4 clicked') },
          
          ],
        },
        {
          heading: 'How many hours per day?',
          subHeading: 'Select 1 out of 3 options',
          data: [
            { label: '3-5', onClick: () => alert('Button 1 clicked') },
            { label: '5-12', onClick: () => alert('Button 2 clicked') },
            { label: '12-24', onClick: () => alert('Button 3 clicked') }
          ],
        },
        {
          heading: 'Do any of your child has any disability?',
          subHeading: 'Select 1 out of 2 options',
          data: [
            { label: 'Yes', onClick: () => alert('Button 1 clicked') },
            { label: 'No', onClick: () => alert('Button 2 clicked') }
          ],
        },
        {
          heading: 'Do you have Dogs?',
          subHeading: 'Select 1 out of 2 options',
          data: [
            { label: 'Yes', onClick: () => alert('Button 1 clicked') },
            { label: 'No', onClick: () => alert('Button 2 clicked') },
          ],
        },
        
      ],
    },
    {
      title: 'Nurse',
      subsections: [
        {
          heading: 'How many patients?',
          subHeading: 'Select 1 out of 3 options',
          data: [
            { label: '1 person', onClick: () => alert('Button 1 clicked') },
            { label: '2 people', onClick: () => alert('Button 2 clicked') },
            { label: '3 people', onClick: () => alert('Button 3 clicked') },
          ],
        },
        {
          heading: 'How many hours per day?',
          subHeading: 'Select 1 out of 7 options',
          data: [
            { label: '1-2', onClick: () => alert('Button 1 clicked') },
            { label: '2-3', onClick: () => alert('Button 2 clicked') },
            { label: '3-4', onClick: () => alert('Button 3 clicked') },
            { label: '4-6', onClick: () => alert('Button 4 clicked') },
            { label: '6-12', onClick: () => alert('Button 5 clicked') },
            { label: '12-16', onClick: () => alert('Button 6 clicked')},
            { label: '16-24', onClick: () => alert('Button 7 clicked') },
          ],
        },
        {
          heading: 'Are you open to admit when required?',
          subHeading: 'Select 1 out of 2 options',
          data: [
            { label: 'Yes', onClick: () => alert('Button 1 clicked') },
            { label: 'No', onClick: () => alert('Button 2 clicked') }
          ],
        },
      ],
    }
  ];
  const history = useNavigate();
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
  
  history("/summary")
  
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