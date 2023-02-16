import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from 'react-test-renderer';
import LabelGold from "../components/LabelGold";

  describe ('LabelCold component', ()=>{
    test('The correctli snapshot component', ()=>{
        const component=renderer.create(<LabelGold/>);
        const tree=component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    test('it renders', ()=>{
        render(<LabelGold/>);
        expect(screen.getByText('Gold')).toBeInTheDocument()
    })
  })
   