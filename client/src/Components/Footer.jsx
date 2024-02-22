// import React from 'react';
// import { Box, Container, Typography, IconButton, Link } from '@mui/material';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';

// const breakTextEveryNWords = (text, n) => {
//   const words = text.split(' ');
//   const result = [];
//   for (let i = 0; i < words.length; i += n) {
//     result.push(words.slice(i, i + n).join(' '));
//   }
//   return result.join('<br />');
// };

// const Footer = () => {
//   const paragraphText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
//   const brokenParagraph = breakTextEveryNWords(paragraphText, 5);

//   return (
//     <Box sx={{ backgroundColor: 'black', color: 'white', padding: 2 }}>
//       <Container>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',width:'100%'}}>
//           {/* Left Section */}
//           <Box>
//             {/* Follow Us On Icons */}
//             <Typography variant="h6" gutterBottom>
//               Follow Us On
//               <IconButton color="inherit" component={Link} href="#">
//                 <FacebookIcon />
//               </IconButton>
//               <IconButton color="inherit" component={Link} href="#">
//                 <TwitterIcon />
//               </IconButton>
//             </Typography>

//             {/* HelperHub Font-like Logo */}
//             <Typography variant="h6" gutterBottom>
//               HelperHub
//             </Typography>

//             {/* Small 5-line Paragraph */}
//             <Typography variant="body2" dangerouslySetInnerHTML={{ __html: brokenParagraph }} />
//           </Box>

//           {/* Center Section (Menu) */}
//           <Box sx={{ textAlign: 'center', flexGrow: 1 }}>
//             {/* Menu Links */}
//             <Typography variant="body2">
//               <Box>
//                 <Link href="#" color="inherit">
//                   Home
//                 </Link>
//               </Box>
//               <Box>
//                 <Link href="#" color="inherit">
//                   Services
//                 </Link>
//               </Box>
//               <Box>
//                 <Link href="#" color="inherit">
//                   About Us
//                 </Link>
//               </Box>
//               <Box>
//                 <Link href="#" color="inherit">
//                   Contact Us
//                 </Link>
//               </Box>
//             </Typography>
//           </Box>

//           {/* Right Section */}
//           <Box sx={{ textAlign: 'left' }}>
//             {/* Additional Right-aligned content */}
//             <Typography variant="body2">
//             <Typography>HelperHub—Your Partner in Home Wellness</Typography>
//             <Typography style={{width:'30%'}}>Elevate your living experience with our trusted and compassionate services. At HelperHub, we're not just caregivers; we're family.</Typography>
//             <Typography>© 2024 HelperHub. All rights reserved</Typography>
//             </Typography>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;
import React from 'react';
import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

// const breakTextEveryNWords = (text, n) => {
//   const words = text.split(' ');
//   const result = [];
//   for (let i = 0; i < words.length; i += n) {
//     result.push(words.slice(i, i + n).join(' '));
//   }
//   return result.join('<br />');
// };

const Footer = () => {
  // const paragraphText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  // const brokenParagraph = breakTextEveryNWords(paragraphText, 5);

  return (
    <Box sx={{ backgroundColor: 'black', color: 'white', padding: 2 }}>
      <Container>
        <Box 
          sx={{
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            width: '100%', // Set width to take the entire width of the container
          }}
        >
          {/* Left Section */}
          <Box sx={{ flex: '1', marginRight: '1rem' }}>
            {/* Follow Us On Icons */}
            <Typography variant="h6" gutterBottom>
              Follow Us On
              <IconButton color="inherit" component={Link} href="#">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" component={Link} href="#">
                <TwitterIcon />
              </IconButton>
            </Typography>

            {/* HelperHub Font-like Logo */}
            <Typography variant="h6" gutterBottom>
              HelperHub
            </Typography>

            {/* Small 5-line Paragraph */}
            <Typography variant="body2">
            HelperHub is your dedicated partner in creating a nurturing home environment. Explore our range of services designed to make your life easier and more enjoyable. Whether you're seeking reliable caregivers, professional nursing assistance, or efficient housekeeping, we're here to cater to your unique needs.
            </Typography>
          </Box>

          {/* Center Section (Menu) */}
          <Box sx={{ flex: '1', textAlign: 'center', marginRight: '1rem' }}>
            {/* Menu Links */}
            <Typography variant="body2" style={{display:'flex',flexDirection:'column',gap:'0.2rem'}}>
              <Box>
                <Link href="/home" color="inherit">
                  Home
                </Link>
              </Box>
              <Box>
                <Link href="/services/All services" color="inherit">
                  Services
                </Link>
              </Box>
              <Box>
                <Link href="/about" color="inherit">
                  About Us
                </Link>
              </Box>
              <Box>
                <Link href="/contact" color="inherit">
                  Contact Us
                </Link>
              </Box>
            </Typography>
          </Box>

          {/* Right Section */}
          <Box sx={{ flex: '1', textAlign: 'left' }}>
            {/* Additional Right-aligned content */}
            <Typography variant="body2">
            <Typography>HelperHub—Your Partner in Home Wellness</Typography>
            <Typography style={{margin:'0.4rem 0'}}>Elevate your living experience with our trusted and compassionate services. At HelperHub, we're not just caregivers; we're family.</Typography>
            <Typography>© 2024 HelperHub. All rights reserved</Typography>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;