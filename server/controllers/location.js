import { Location } from '../models/location.js';
import fs from 'fs';
import path from 'path';

export const saveLocations = async (req, res) => {
  const { label } = req.body;
    if (!req.file) {
      throw new Error('No image uploaded');
    }
    console.log(req.file)
    

    let existingLocation = await Location.findOne({ label });
    if (!existingLocation) {
      existingLocation = new Location({ label,icon:req.file.filename });
    }

    

    await existingLocation.save();

    const responseData = {
      success: true,
      message: 'Location added successfully',
    
    existingLocation
    };
    res.status(201).json(responseData);
 };

export const displayLocations = async (req, res) => {
    const getLocations = await Location.find();

    if (!getLocations || getLocations.length === 0) {
      return res.status(404).json({ success: false, message: 'Location not found' });
    }
    res.status(200).json({
      success: true,
      getLocations
    });
  
};
