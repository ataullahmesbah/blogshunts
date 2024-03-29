'use client';

import * as React from 'react';
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";

import PropTypes from 'prop-types';
import SEO from './ServicesPortal/SEO';



function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const ServiceTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container>
            <div className="mt-10">

                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 2, borderColor: 'divider' }} >
                        <Tabs sx={{
                            justifyContent: 'center', textAlign: 'center',


                        }} value={value} onChange={handleChange} aria-label="basic tabs example" >
                            <Tab className='font-semibold hover:bg-blue-100 hover:rounded-md text-black' label="SEO" {...a11yProps(0)} />
                            <Tab className='font-semibold hover:bg-blue-100 hover:rounded-md text-black' label="Social Media " {...a11yProps(1)} />
                            <Tab className='font-semibold hover:bg-blue-100 hover:rounded-md text-black' label="Web Development" {...a11yProps(2)} />
                            <Tab className='font-semibold hover:bg-blue-100 hover:rounded-md text-black' label="Content Strategy" {...a11yProps(3)} />
                            <Tab className='font-semibold hover:bg-blue-100 hover:rounded-md text-black' label="Email Marketing" {...a11yProps(4)} />
                            <Tab className='font-semibold hover:bg-blue-100 hover:rounded-md text-black' label="PPC" {...a11yProps(5)} />
                            <Tab className='font-semibold hover:bg-blue-100 hover:rounded-md text-black' label="Small Business Solutions" {...a11yProps()} />

                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <SEO />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        Item Two
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        Item Three
                    </CustomTabPanel>
                </Box>
            </div>
        </Container>
    );
}

export default ServiceTabs;