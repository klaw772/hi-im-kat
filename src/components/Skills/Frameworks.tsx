import React, { FC } from "react";
import { SkillsIcon } from "./SkillsIcon";
import { Row, Col } from "react-bootstrap";

export interface LanguagesProps {
  frameworkList: { framework: string; title: string }[];
}
export const Frameworks: FC<LanguagesProps> = ({ frameworkList }) => {
   return (
     <>
       <h1 className="d-flex justify-content-center">Frameworks</h1>
       <Row className="d-flex justify-content-center align-items-center">
         {frameworkList.map((framework) => (
           <Col
             xs={6}
             sm={6}
             md={2}
             lg={2}
             className="d-flex justify-content-center"
           >
             <SkillsIcon tech={framework.framework} title={framework.title} />
           </Col>
         ))}
       </Row>
     </>
   );
};
