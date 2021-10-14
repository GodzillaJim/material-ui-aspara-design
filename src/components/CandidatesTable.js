import React from "react";
import { LoremIpsum } from "lorem-ipsum";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  makeStyles
} from "@material-ui/core";
import PropTypes from "prop-types";
import * as faker from "faker";

const useStyles = makeStyles((theme) => ({
  tableHeadText: {
    fontSize: "11px",
    fontFamily: "Comic Sans Ms"
  }
}));
const headers = [
  "NAME",
  "COUNTRY",
  "SKILLS",
  "EXPERIENCE",
  "ENGLISH PROFICIENCY",
  "BOOK AN INTERVIEW"
];
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});
const candidateList = [];
for (let i = 0; i < 5; i++) {
  candidateList.push({
    name: lorem.generateWords(1)
  });
}
const CandidatesTable = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {headers.map((header, index) => (
            <CustomHeader key={index} label={header} />
          ))}
        </TableRow>
      </TableHead>
      <TableBody>t</TableBody>
    </Table>
  );
};
const CustomHeader = ({ label }) => {
  const classes = useStyles();
  return (
    <TableCell>
      <Typography className={classes.tableHeadText}>{label}</Typography>
    </TableCell>
  );
};
CustomHeader.propTypes = {
  label: PropTypes.string
};
export default CandidatesTable;
