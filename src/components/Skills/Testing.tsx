import React, { FC } from "react";
import { SkillsIcon } from "./SkillsIcon";
import { Row, Col } from "react-bootstrap";

export interface TestingProps {
  testingList: { test: string; title: string }[];
}
export const Testing: FC<TestingProps> = ({ testingList }) => {
   return (
     <>
       <h1>Testing</h1>
       <Row className="ml-2 d-flex justify-content-center align-items-center">
         {testingList.map((test) => (
           <Col xs={6} sm={6} md={2} lg={2}>
             <SkillsIcon tech={test.test} title={test.title} />
           </Col>
         ))}
       </Row>
     </>
   );
};
