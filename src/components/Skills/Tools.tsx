import React, { FC } from "react";
import { SkillsIcon } from "./SkillsIcon";
import { Row, Col } from "react-bootstrap";

export interface ToolsProps {
  toolList: { tool: string; title: string }[];
}
export const Tools: FC<ToolsProps> = ({ toolList }) => {
   return (
     <>
       <h1>Tools</h1>
       <Row className="ml-5 d-flex justify-content-center align-items-center">
         {toolList.map((tool) => (
           <Col xs={6} sm={6} md={2} lg={2}>
             <SkillsIcon tech={tool.tool} title={tool.title} />
           </Col>
         ))}
       </Row>
     </>
   );
};
