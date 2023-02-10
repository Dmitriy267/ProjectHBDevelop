import React from "react";
import {render, fireEvent, screen} from '@testing-library/react';
import NewsTitleSection from '../components/NewsTitleSection';
import {describe, expect, test} from '@jest/globals';

describe('NewsTitleSection', ()=>{
    test('renders title text', ()=>{
        render(<NewsTitleSection />);
        expect( screen.findByText(/Линия Сталина: суровый отдых в усадьбах на сутки/i));
    });
    test('get atribut alt', ()=>{
        render(<NewsTitleSection />);
        expect(screen.findByAltText('Изображение иконки вконтакте'))
    })
})
   