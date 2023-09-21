import { Box, Step, StepLabel, Stepper } from "@mui/material";
import React, { useState } from "react";
import { FirstStep } from "./orderSteps/firstStep/FirstStep";
import { SecondStep } from "./orderSteps/secondStep/SecondStep";
import { ThirdStep } from "./orderSteps/thirdStep/ThirdStep";
import { FourthStep } from "./orderSteps/FourthStep/FourthStep";
import { FivthStep } from "./orderSteps/fivthStep/FivthStep";

const steps = ["Input fio etc", "Cart check", "photo", "delivery", "final"];

export const MakingOrderPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps: { completed?: boolean } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === 0 && <FirstStep goNext={handleNext} />}
      {activeStep === 1 && <SecondStep goNext={handleNext} />}
      {activeStep === 2 && <ThirdStep goNext={handleNext} />}
      {activeStep === 3 && <FourthStep goNext={handleNext} />}
      {activeStep === 4 && <FivthStep />}
    </Box>
  );
};
