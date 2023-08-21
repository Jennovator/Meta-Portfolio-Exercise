import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
    const { isLoading, response, submit } = useSubmit();
    const { onOpen } = useAlertContext();

    // Utilized the useFormik hook from formik library, passing an object with 3 properties: initialValues, onSubmit, and ValidationSchema
    const formik = useFormik({
        // This contains the data from the form fields
        initialValues: {
            firstName: "",
            email: "",
            type: "hireMe",
            comment: "",
        },
        // Executed when the form is submmitted, taking a parameter 'values', which represents the form field values at the time of submission
        onSubmit: (values) => {
            submit("https://mabborang.com/contactme", values);
        },
        // This will ensure that the fields meet certain validaiton criteria before submission
        validationSchema: Yup.object({
            firstName: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            comment: Yup.string()
                .min(25, "Must be at least 25 characters")
                .required("Required"),
        }),
    });

    // Perform certain actions when the response value changes
    useEffect(() => {
        // If a response is received (not null or undefined)
        if (response) {
            // it opens an alert based on the response type and message
            onOpen(response.type, response.message);
            // If the response type is "success," it also resets the form to its initial values
            if (response.type === "success") {
                formik.resetForm();
            }
        }
    }, [response]);

    return (
        <div className="container">
            <FullScreenSection
                isDarkBackground
                backgroundColor="#d5dadb"
                py={2}
                spacing={2}
            >
                <VStack w="850px" p={30} alignItems="flex-start" color="black">
                    <Heading as="h1" id="contactme-section">
                        Contact me
                    </Heading>
                    <Box p={6} rounded="md" w="100%" backgroundColor="#EDEFEE" borderRadius="xl">
                        <form onSubmit={formik.handleSubmit}>
                            <VStack spacing={4}>
                                <FormControl
                                    isInvalid={
                                        !!formik.errors.firstName && formik.touched.firstName
                                    }
                                >
                                    <FormLabel htmlFor="firstName">Name</FormLabel>
                                    <Input
                                        id="firstName"
                                        name="firstName"
                                        focusBorderColor="blue"
                                        {...formik.getFieldProps("firstName")}
                                        outlineColor="#a0acaf"
                                    />
                                    <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                                </FormControl>
                                <FormControl
                                    isInvalid={!!formik.errors.email && formik.touched.email}
                                >
                                    <FormLabel htmlFor="email">Email Address</FormLabel>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        focusBorderColor="blue"
                                        {...formik.getFieldProps("email")}
                                        outlineColor="#a0acaf"
                                    />
                                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                                    <Select id="type" name="type" {...formik.getFieldProps("type")} focusBorderColor="blue" outlineColor="#a0acaf">
                                        <option value="hireMe">Project proposal</option>
                                        <option value="openSource">Open source session</option>
                                        <option value="other">Other</option>
                                    </Select>
                                </FormControl>
                                <FormControl
                                    isInvalid={!!formik.errors.comment && formik.touched.comment}
                                >
                                    <FormLabel htmlFor="comment">Your message</FormLabel>
                                    <Textarea
                                        id="comment"
                                        name="comment"
                                        height={250}
                                        focusBorderColor="blue"
                                        outlineColor="#a0acaf"
                                        {...formik.getFieldProps("comment")}
                                    />
                                    <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                                </FormControl>
                                <Button
                                    type="submit"
                                    colorScheme="purple"
                                    width="full"
                                    isLoading={isLoading}
                                >
                                    Submit
                                </Button>
                            </VStack>
                        </form>
                    </Box>
                </VStack>
            </FullScreenSection>
        </div>
    );
};

export default ContactMeSection;
