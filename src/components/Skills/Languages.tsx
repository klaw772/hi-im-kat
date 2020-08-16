import React, { FC } from 'react';
import { SkillsIcon } from './SkillsIcon';
import { Row, Col } from 'react-bootstrap';

export interface LanguagesProps {
    languageList: {language: string, title: string}[]
}
export const Languages: FC<LanguagesProps> = ({languageList}) => {
    return (
      <>
        <h1 className="mt-5">Languages</h1>
        <Row className="ml-3 d-flex justify-content-center align-items-center">
          {languageList.map((language) => (
            <Col xs={6} sm={6} md={2} lg={2}>
              <SkillsIcon tech={language.language} title={language.title} />
            </Col>
          ))}
        </Row>
      </>
    );
}