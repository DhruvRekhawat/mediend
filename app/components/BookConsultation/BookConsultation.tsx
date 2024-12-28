"use client";
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Image,
  NumberInput,
  rem,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import classes from "./BookConsultation.module.css";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import { diseases } from "./consultList";
import { ConsultForm } from "../ConsultForm/ConsultForm";
const BookConsultation = () => {
  const mobile = useMediaQuery(`(min-width: 1100px)`);

  return (
    <Box id="bookfreeconsultation" className={classes.main}>
      <Box className={classes.bg}>
        <Image
          src="/assets/consult_bg.png"
          height={mobile ? 400 : 250}
          width={600}
          alt="consult bg"
        />
      </Box>
      <Box className={classes.info}>
        <Text c="#1D3557" fz={rem(30)} fw={600}>
          Get in Touch
        </Text>
        <Text my={15}>
          Tell us about your problems and we&apos;ll figure out the best
          treatment option for you.
        </Text>
      </Box>
      <Box className={classes.form} data-aos="zoom-in">
        <ConsultForm />
      </Box>
    </Box>
  );
};
export default BookConsultation;
