import {
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  Box,
  StepTitle,
  StepDescription,
  StepSeparator,
  useSteps,
  Card,
  CardBody,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

const steps = [
  { title: "Who do you want to be?", description: "Select your character" },
  {
    title: "Who are you?",
    description: "We're just getting to know each other",
  },
  {
    title: "Set up your account",
    description: "The stuff you write when logging in",
  },
  { title: "Where to deliver to?", description: "Enter your address" },
];

const RegisterStepper = ({
  stepOne,
  stepTwo,
  stepThree,
  stepFour,
  onNextClick,
}) => {
  const { activeStep, setActiveStep, goToNext, goToPrevious } = useSteps({
    index: 0,
    count: steps.length,
  });

  useEffect(() => {
    if (onNextClick) goToNext();
  }, [onNextClick]);

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return stepOne;

      case 1:
        return stepTwo;

      case 2:
        return stepThree;

      case 3:
        return stepFour;
    }
  };

  return (
    <>
      <Box ml={5} mr={5}>
        <Stepper index={activeStep} mb={5}>
          {steps.map((step, index) => (
            <Step key={index} onClick={() => setActiveStep(index)}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>
              <Box>
                {index === activeStep && (
                  <>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                  </>
                )}
              </Box>
              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box align="center">{renderStepContent()}</Box>
    </>
  );
};

export default RegisterStepper;
