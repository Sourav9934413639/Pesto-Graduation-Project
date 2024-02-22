import React, { useState } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

const options = [
  {
    label: "Option 1",
    rows: 1,
    content: {
      card1: {
        left: { heading: "Left Heading 1", text: "Left Text 1" },
        right: {
          heading: "Right Heading 1",
          description: "Right Description 1",
        },
      },
    },
  },
  {
    label: "Option 2",
    rows: 2,
    content: {
      card1: {
        left: { heading: "Left Heading 1", text: "Left Text 1" },
        right: {
          heading: "Right Heading 1",
          description: "Right Description 1",
        },
      },
      card2: {
        left: { heading: "Left Heading 2", text: "Left Text 2" },
        right: {
          heading: "Right Heading 2",
          description: "Right Description 2",
        },
      },
    },
  },
  {
    label: "Option 3",
    rows: 2,
    content: {
      card1: {
        left: { heading: "Left Heading 1", text: "Left Text 1" },
        right: {
          heading: "Right Heading 1",
          description: "Right Description 1",
        },
      },
      card2: {
        left: { heading: "Left Heading 2", text: "Left Text 2" },
        right: {
          heading: "Right Heading 2",
          description: "Right Description 2",
        },
      },
    },
  },
];

const MemberShipDetails = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleDropdownChange = (event) => {
    const selected = options.find(
      (option) => option.label === event.target.value
    );
    setSelectedOption(selected);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
      <div style={{ width: "20%" }}>
        <FormControl fullWidth>
          <Select
            labelId="dropdown-label"
            id="dropdown"
            value={selectedOption.label}
            onChange={handleDropdownChange}
          >
            {options.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <div style={{ width: "45%" }}>
          <Grid container spacing={2} xs={12}>
            {[...Array(selectedOption.rows)].map((_, index) => (
              <Grid item key={index} xs={12}>
                <Card
                  style={{
                    display: "flex",
                    height: "100%",
                    borderRadius: "8px",
                  }}
                >
                  <CardContent style={{ flex: 1, marginLeft: 2 }}>
                    <div
                      style={{
                        backgroundColor: "#e3f2fd",
                        padding: "10px",
                        borderRadius: "8px",
                        marginBottom: "10px",
                        height: "fit-content",
                        width: "fit-content",
                      }}
                    >
                      <Typography variant="h6">Card {index + 1}</Typography>
                      <Typography variant="h6">
                        {
                          selectedOption.content[`card${index + 1}`].left
                            .heading
                        }
                      </Typography>
                    </div>
                  </CardContent>
                  <CardContent style={{ flex: 1, marginLeft: 2 }}>
                    <div>
                      <Typography variant="h6">
                        {
                          selectedOption.content[`card${index + 1}`].right
                            .heading
                        }
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {
                          selectedOption.content[`card${index + 1}`].right
                            .description
                        }
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>

        <div style={{ width: "45%" }}>
          <div style={{ marginBottom: "15px" }}>
            <Typography variant="h4">Right Section</Typography>
          </div>
          <div>
            <Typography variant="h6">Heading</Typography>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li>Bullet Point 1</li>
              <li>Bullet Point 2</li>
              <li>Bullet Point 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberShipDetails;