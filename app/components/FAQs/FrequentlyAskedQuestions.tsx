"use client"

import React, { useState } from "react";
import { Accordion, Box, Title } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import classes from "./faq.module.css";

// Define the type for an individual FAQ item
export interface FAQItem {
  question: string;  // Question
  answer: string;  // Answer
}

// Props interface for the component
interface FrequentlyAskedQuestionsProps {
  faqs: FAQItem[];
  title?: string;
  emptyStateMessage?: string;
  className?: string;
}

const FrequentlyAskedQuestions: React.FC<FrequentlyAskedQuestionsProps> = ({
  faqs,
  title = "Frequently Asked Questions",
  emptyStateMessage = "No questions available at the moment.",
  className
}) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  // Handle empty state
  if (!faqs || faqs.length === 0) {
    return (
      <Box my={100} data-aos="zoom-in" className={className}>
        <Title className={classes.main__title} data-aos="zoom-in-up">
          {title}
        </Title>
        <Box className={classes.accordion__main}>
          {emptyStateMessage}
        </Box>
      </Box>
    );
  }

  return (
    <Box my={100} data-aos="zoom-in" className={className} id="FAQs">
      <Title className={classes.main__title} data-aos="zoom-in-up">
        {title}
      </Title>
      <Box className={classes.accordion__main}>
        <Accordion
          variant="separated"
          value={activeItem}
          onChange={setActiveItem}
          chevron={<IconChevronRight />}
          classNames={{ 
            item: classes.item, 
            chevron: classes.chevron 
          }}
        >
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={index}
              className={`${classes.item} ${
                activeItem === faq.question ? classes.activeItem : ""
              }`}
              value={faq.question}
            >
              <Accordion.Control c="#170F49">
                {faq.question}
              </Accordion.Control>
              <Accordion.Panel c="#6F6C90">
                {faq.answer}
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Box>
    </Box>
  );
};

export default FrequentlyAskedQuestions;