import React from 'react';
import ReactSlick, { Settings } from 'react-slick';
import styled from '@emotion/styled';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { css } from '@emotion/react';

const ArrowButton = styled.button<{ pos?: 'left' | 'right' }>`
    padding: 16px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    z-index: 1;
    top: 50%;
    background-color: #fff;
    ${({ pos }) => pos === 'left' ? 
        css`left: 0; transform: translate(-50%, -50%)` :
        css`right: 0; transform: translate(50%, -50%)`
    }
    &:before {
        content: initial;
    }
    > svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 10px;
        color: #222;
    }
`;

const DEFAULT_SETTINGS: Settings = {
    dots: false, // 하단 인디케이터 노출 X
    arrows: true, // 좌 우 이동 화살표 표시 여부
    infinite: false, // 마지막 슬라이더로 갔을 때 다시 처음으로 돌아갈지 여부
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5, // 슬라이드마다 표시될 수
    swipe: true,
    draggable: true,
    prevArrow: (
        <ArrowButton>
            <MdArrowBackIos />
        </ArrowButton>
    ),
    nextArrow: (
        <ArrowButton>
            <MdArrowForwardIos />
        </ArrowButton>
    ),
}

interface Props {
    settings?: Settings;
}

const Slider: React.FC<Props> = ({ settings = DEFAULT_SETTINGS, children }) => {

    return (
        <ReactSlick {...settings}>
            {children}
        </ReactSlick>
    );
};

export default Slider;