import React from 'react';
import { NavBarComponent } from "../../components/NavBar/NavBarComponent";
import { ListDocuments } from "../../components/ListDocuments/ListDocumentsComponent"

export const Home: React.FC = () => {

  return (
    <div>
      <NavBarComponent />
      <ListDocuments />
    </div>
  );
};