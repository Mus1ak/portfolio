import { useEffect } from "react";
import LocomotiveScroll from 'locomotive-scroll';
import '../locomotive-scroll.css';


export default function useLoco(start) {
    useEffect(() => {
        if (!start) return;
        const scrollEl = document.querySelector('.main')
        const locoscroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            class: 'is-reveal'
        })
    }, [start])
}