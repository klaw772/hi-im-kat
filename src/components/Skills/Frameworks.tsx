import React, { FC } from "react";
import { SkillsIcon } from "./SkillsIcon";
import { Row, Col } from "react-bootstrap";

export interface LanguagesProps {
  frameworkList: { framework: string; title: string }[];
}
export const Frameworks: FC<LanguagesProps> = ({ frameworkList }) => {
   return (
     <>
       <h1>Frameworks</h1>
       <Row className="ml-2 d-flex justify-content-center align-items-center">
         {frameworkList.map((framework) => (
           <Col xs={6} sm={6} md={2} lg={2}>
             <SkillsIcon tech={framework.framework} title={framework.title} />
           </Col>
         ))}
       </Row>
     </>
   );
};
