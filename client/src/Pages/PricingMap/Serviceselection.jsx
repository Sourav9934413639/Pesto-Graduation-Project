import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const combinedData = [
  {
    title:"Cleaning",
    servicesInfo: {
      serviceData: {
        header: "Brooming, Mopping",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "1000",
        description: "Description of the service goes here.",
        description2: "Add Inclusive services",
      },
      addonsData: [
        {
          header: "Dusting",
          image: "https://www.housedigest.com/img/gallery/5-time-saving-dusting-hacks-you-must-try/intro-1658417306.jpg",
          price: "500",
          description: "Add-on service for cleaning windows.",
        },
        {
          header: "Bathroom Cleaning",
          image: "https://www.housedigest.com/img/gallery/5-time-saving-dusting-hacks-you-must-try/intro-1658417306.jpg",
          price: "1000",
          description: "Add-on service for bathroom cleaning.",
        },
      ],
    },
  },
  {
    title:"Cooking",
    servicesInfo: {
      serviceData: {
        header: "Meal Preparation",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29va3xlbnwwfHwwfHx8MA%3D%3D",
        price: "1500",
        description: "Description of the cooking service goes here.",
        description2: "Add Inclusive ingredients",
      },
      addonsData: [
        {
          header: "Dessert Making",
          image: "https://www.housedigest.com/img/gallery/5-time-saving-dusting-hacks-you-must-try/intro-1658417306.jpg",
          price: "800",
          description: "Add-on service for making desserts.",
        },
        {
          header: "Special Cuisine",
          image: "https://www.housedigest.com/img/gallery/5-time-saving-dusting-hacks-you-must-try/intro-1658417306.jpg",
          price: "1200",
          description: "Add-on service for cooking special cuisines.",
        },
      ],
    },
  },
  {
    title:"Nurse",
    servicesInfo: {
      serviceData: {
        header: "For your health wellness",
        image: 'https://plus.unsplash.com/premium_photo-1676325101995-cdfc26d820bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D', 
        price: "20000",
        description: "Always with your needy specialized medical attention and compassionate support tailored to individual patient needs.",
        description2: "Managing chronic conditions and coordinating care plans as needed without delay",
      },
      addonsData: [
        {
          header: "Extra cover",
          image: "https://images.unsplash.com/photo-1563263427-708318a97183?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: "8000",
          description: "Advocating for patients' needs within the healthcare system.",
        },
        {
          header: "Necessity for old ones",
          image: "https://images.unsplash.com/photo-1537655780520-1e392ead81f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: "10000",
          description: "Monitoring vital signs and administering medications.",
        },
      ],
    },
  },
  {
    title:"Nanny",
    servicesInfo: {
      serviceData: {
        header: "Meal Preparation",
        image: "https://images.unsplash.com/photo-1551218808-94e220e084d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "1500",
        description: "Description of the cooking service goes here.",
        description2: "Add Inclusive ingredients",
      },
      addonsData: [
        {
          header: "Dessert Making",
          image: "https://www.housedigest.com/img/gallery/5-time-saving-dusting-hacks-you-must-try/intro-1658417306.jpg",
          price: "800",
          description: "Add-on service for making desserts.",
        },
        {
          header: "Special Cuisine",
          image: "https://www.housedigest.com/img/gallery/5-time-saving-dusting-hacks-you-must-try/intro-1658417306.jpg",
          price: "1200",
          description: "Add-on service for cooking special cuisines.",
        },
      ],
    },
  }
];

const ServiceSelection = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const {Title}=useSelector(state=>state.serviceReducer);
  const [selectedGender, setSelectedGender] = useState("Male");
  const storedTitle = sessionStorage.getItem("selectedServiceTitle");
  const selectedService = combinedData.find((service) => service.title === Title);
  const [totalPrice,setTotalPrice]=useState(0);
  const [basicServicePay,setBasicServicePay]=useState({});
  const [basicPayAdded,setBasicPayAdded]=useState(false);

  const [addOns,setAddOns]=useState({});
  useEffect(()=>{
    console.log(addOns)
    console.log(basicServicePay)
    //dispatch({type:'basicPayObj',payload:basicServicePay});

    dispatch({type:'addOnsObj',payload:addOns});
  },[basicServicePay,addOns,dispatch])
  
  //const [serviceInfo,setServiceInfo]=useState(localStorage.getItem('serviceInfo'))
  const moveNext=()=>{
    if(!basicPayAdded){
      toast.error("Please avail basic service to move further");
        return;
    }
    else{
      dispatch({type:"addGenderAndAmount",payload:{Gender:selectedGender,TotalPrice:Number(totalPrice)}})
      navigate("/DetailsRegBooking");
    }
  }
  
  const handleServiceSelection=(mainHeading,price)=>{
    // const parsedServiceInfo = JSON.parse(serviceInfo);
    // const updatedServiceInfo = [...parsedServiceInfo, {gender:selectedGender,price }];
    // localStorage.setItem('serviceInfo', JSON.stringify(updatedServiceInfo));
    // setServiceInfo(JSON.stringify(updatedServiceInfo));
    if(Object.keys(basicServicePay).length !== 0){
      setBasicPayAdded(false);
      const updatedBasePay={...basicServicePay}
      delete updatedBasePay[mainHeading];
      console.log(updatedBasePay);
      setBasicServicePay(updatedBasePay);
      setAddOns({});
      dispatch({ type: 'removeBasicPay', payload: mainHeading });
      // setTotalPrice(prevPrice => {
      //   console.log(prevPrice-Number(price))
      //   return prevPrice-Number(price)
      // });
      setTotalPrice(0);

    }
    else{
      setBasicPayAdded(true);
      toast.success("You may avail addOns also")
      setBasicServicePay(prevBasicPay => {
        const updatedBasicPay = { ...prevBasicPay, [mainHeading]: Number(price) };
        console.log(updatedBasicPay)
        dispatch({ type: "basicPay", payload: updatedBasicPay });
        return updatedBasicPay;
      });
      setTotalPrice((prev)=>{
      
        const updatedPrice= prev+Number(price);
        console.log(updatedPrice);
        return updatedPrice;
      });
      
  }
  }
  const sumUp=(heading,extraCharge)=>{
    if(!basicPayAdded){
      return;
    }
    if(addOns[heading]){
      
      const updatedAddOns={...addOns}
      delete updatedAddOns[heading];
      console.log(updatedAddOns);
      setAddOns(updatedAddOns);
      setTotalPrice(prevPrice => {
        console.log(prevPrice-Number(extraCharge))
        return prevPrice-Number(extraCharge)
      });
    }
    else{
    setTotalPrice((prev)=>{
      
      const updatedPrice= prev+Number(extraCharge);
      console.log(updatedPrice);
      return updatedPrice;
    });
    setAddOns((prevAddOn) =>{
      const updatedAddOns = { ...prevAddOn, [heading]: Number(extraCharge) };
      console.log(updatedAddOns)
      return updatedAddOns;
    })
  }
  }
  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  
  
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Select Service
      </Typography>

      <FormControl component="fieldset" sx={{ marginBottom: 2 }}>
        <Typography variant="h6" gutterBottom>
          Gender
        </Typography>
        <RadioGroup
          row
          aria-label="gender"
          name="gender"
          value={selectedGender}
          onChange={handleGenderChange}
        >
          <FormControlLabel
            key="male"
            value="Male"
            control={<Radio />}
            label="Male"
          />
          <FormControlLabel
            key="female"
            value="Female"
            control={<Radio />}
            label="Female"
          />
          <FormControlLabel
            key="other"
            value="Other"
            control={<Radio />}
            label="Other"
          />
        </RadioGroup>
      </FormControl>

      <Typography variant="h5" marginTop={1}>
        {storedTitle}
      </Typography>

     
      <Card
        sx={{
          height: "100%",
          display: "flex",
          borderRadius: "1rem",
          marginBottom: "1rem",
        }}
      >
        <img
          src={selectedService.servicesInfo.serviceData.image}
          alt="Service"
          style={{
            width: "20%",
            objectFit: "cover",
            margin: "1rem",
            borderRadius: "1rem",
          }}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {selectedService.servicesInfo.serviceData.header}
            </Typography>
            <Typography variant="h6">
              Price: Rs{selectedService.servicesInfo.serviceData.price}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {selectedService.servicesInfo.serviceData.description}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {selectedService.servicesInfo.serviceData.description2}
            </Typography>
          </div>
          <CardActions sx={{ alignSelf: "flex-end" }}>
            <Button
              variant="contained"
              color="primary"
              style={{
                borderRadius: "50%",
                minWidth: "3rem",
                padding: "0.5rem",
                background: "black",
              }}
             
              onClick={()=>handleServiceSelection(selectedService.servicesInfo.serviceData.header,selectedService.servicesInfo.serviceData.price)}
              >
            
              <Typography
                variant="h6"
                style={{ color: "white", borderColor: "white" }}
              >
                {(Object.keys(basicServicePay).length !== 0)?"-":"+"}
              </Typography>
            </Button>
          </CardActions>
        </CardContent>
      </Card>

      <Typography variant="h5" marginTop={2} fontWeight={"bold"}>
        Add-Ons
      </Typography>
      {selectedService.servicesInfo.addonsData.map((addon, index) => (
        <Card
          key={index}
          sx={{
            height: "100%",
            display: "flex",
            width: "100%",
            borderRadius: "1rem",
            marginBottom: "1rem",
            marginRight: "1rem",
          }}
        >
          <img
            src={addon.image}
            alt={`Addon`}
            style={{
              width: "20%",
              objectFit: "cover",
              margin: "1rem",
              borderRadius: "1rem",
            }}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                {addon.header}
              </Typography>
              <Typography variant="h6">Price: Rs{addon.price}</Typography>
              <Typography variant="body2" color="textSecondary">
                {addon.description}
              </Typography>
            </div>
            <CardActions sx={{ alignSelf: "flex-end" }}>
              <Button
                variant="contained"
                color="primary"
                style={{
                  borderRadius: "50%",
                  minWidth: "3rem",
                  padding: "0.5rem",
                  background: "black",
                  opacity:!basicPayAdded?0.5:1
                }}
                disabled={!basicPayAdded}
                onClick={()=>sumUp(addon.header,addon.price)}
              >
                <Typography
                  variant="h6"
                  style={{ color: "white", borderColor: "white" }}
                >
                  {addOns[addon.header]?'-':'+'}
                </Typography>
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      ))}
      <Box m={4} textAlign="center">
                
        <Button variant="contained" color="primary" style={{opacity:!basicPayAdded?0.5:1}} onClick={moveNext}>
          Next
        </Button>
      </Box>
    </Container>
  );
};

export default ServiceSelection;