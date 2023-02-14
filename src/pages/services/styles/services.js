import styled from "styled-components";

export const Styles = styled.div`
    
.item{
    visibility: visible; 
    animation-delay: 0.25s; 
    animation-name: fadeInRight;
}

.gradation-title-wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.section-sub-title {
    color: #ababab;
    font-size: 14px;
    letter-spacing: 3px;
    text-transform: uppercase;
    line-height: 1.43;
    margin-top: -5px;
}
.mb-20 {
    margin-bottom: 20px;
}
.text-black {
    color: #333333 !important;
}
h4 {
    font-size: 34px;
}
.text-color-primary {
    color: #086AD8;
}
.gradation-sub-heading .heading {
    position: relative;
    font-size: 13px;
    line-height: 2em;
    letter-spacing: 2px;
    text-transform: uppercase;
    display: inline-block;
    padding: 35px 80px 35px 42px;
    z-index: 1;
}
.gradation-sub-heading .heading::before {
    background-color: #086ad8;
    content: "";
    position: absolute;
    top: 47px;
    left: 0;
    width: 34px;
    height: 1px;
}
.gradation-sub-heading .heading mark {
    position: absolute;
    top: 50%;
    right: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    font-size: 120px;
    line-height: 0.8;
    font-weight: 900;
    color: #ededed;
    z-index: -1;
}

.ht-gradation.style-01 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-left: -15px;
    margin-right: -15px;
}
.ht-gradation.style-01 .item {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    position: relative;
    padding: 0 15px;
}
.ht-gradation.style-01 .item .line {
    width: 100%;
    height: 1px;
    background: #ededed;
    position: absolute;
    top: 24px;
    left: 15px;
}
.ht-gradation.style-01 .circle-wrap {
    display: inline-block;
    position: relative;
    margin-bottom: 56px;
}
.ht-gradation.style-01 .item .mask {
    opacity: 0;
    visibility: hidden;
}
.ht-gradation.style-01 .wave-pulse {
    width: 1px;
    height: 0;
    margin: 0 auto;
}
.ht-gradation.style-01 .wave-pulse::before, .ht-gradation.style-01 .wave-pulse::after {
    opacity: 0;
    content: "";
    display: block;
    position: absolute;
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    background: #fff;
    border-radius: 50%;
    border: 1px solid #ababab;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-animation: gradationMask 3s linear infinite;
    animation: gradationMask 3s linear infinite;
}
.ht-gradation.style-01 .wave-pulse-2::before {
    -webkit-animation-delay: 1.2s;
    animation-delay: 1.2s;
}
.ht-gradation.style-01 .wave-pulse-3::before {
    -webkit-animation-delay: 2.4s;
    animation-delay: 2.4s;
}


.ht-gradation.style-01 .circle {
    position: relative;
    z-index: 1;
    width: 48px;
    height: 48px;
    line-height: 44px;
    text-align: center;
    border: 2px solid #e8e8e8;
    border-radius: 50%;
    font-size: 18px;
    background-color: #fff;
    margin-bottom: 0;
    -webkit-transition: all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
    -o-transition: all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ht-gradation.style-01 .heading {
    font-weight: 500;
}
.ht-gradation.style-01 .text {
    margin-top: 17px;
}
.ht-gradation.style-01 .gradation-btn {
    font-weight: 500;
    margin-top: 20px;
    font-size: 14px;
    color: #086AD8;
}
.ht-gradation.style-01 .circle-wrap {
    display: inline-block;
    position: relative;
    margin-bottom: 56px;
}

.section-space--mb_60 {
    margin-bottom: 60px;
}
.section-space--ptb_100 {
    padding-top: 100px;
    padding-bottom: 100px;
}
.ht-gradation.style-01 .item:hover .mask {
    opacity: 1;
    visibility: visible;
}
.ht-gradation.style-01 .item:hover .circle {
    color: #ffffff;
    background: #086AD8;
}

@-webkit-keyframes gradationMask {
    0% {
        -webkit-transform: translate(-50%, -50%) scale(0);
        transform: translate(-50%, -50%) scale(0);
        opacity: 1
    }

    90% {
        opacity: 1
    }

    100% {
        -webkit-transform: translate(-50%, -50%) scale(1);
        transform: translate(-50%, -50%) scale(1);
        opacity: 0;
        border-color: transparent
    }
}

@keyframes gradationMask {
    0% {
        -webkit-transform: translate(-50%, -50%) scale(0);
        transform: translate(-50%, -50%) scale(0);
        opacity: 1
    }

    90% {
        opacity: 1
    }

    100% {
        -webkit-transform: translate(-50%, -50%) scale(1);
        transform: translate(-50%, -50%) scale(1);
        opacity: 0;
        border-color: transparent
    }
}
.text {
    font-size: 15px;
}


.card {
    z-index: 9;
    border-radius: 15px;
}
.ht-gradation.style-01 .heading {
    font-size: 18px;
}
.bg-line.red {
    background: repeating-linear-gradient(-55deg,rgba(255,255,255,0) 0.8px,#e2626b 1.6px,#e2626b 3px,rgba(255,255,255,0) 3.8px,rgba(255,255,255,0) 10px);
}
.shape.rellax {
    z-index: 1;
}
.shape.rellax {
    position: absolute;
    left: -40px;
    top: -30px;
}
.bg-dot, .bg-line {
    opacity: .5;
}
.h-18 {
    height: 8rem!important;
}
.w-18 {
    width: 8rem!important;
}
.lead.fs-lg {
    line-height: 1.6;
}
.underline {
    position: relative;
    z-index: 2;
    white-space: nowrap;
}
.pricing-switcher-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
.pe-3 {
    padding-right: 0.75rem!important;
}
.pricing-switchers {
    width: 2rem;
    height: 1rem;
    clear: both;
    text-align: center;
    position: relative;
    background-color: rgba(30,34,40,.07);
    border-radius: 1.5rem;
    border: 0.2rem solid transparent;
    box-sizing: content-box;
}
.pricing-switchers .pricing-switcher {
    cursor: pointer;
    width: 100%;
    float: left;
    height: 1rem;
    line-height: 1rem;
    position: relative;
    z-index: 888;
    transition: .3s ease-in-out;
    text-transform: uppercase;
}
.pricing-switchers .pricing-switcher:nth-child(1).pricing-switcher-active~.switcher-button {
    left: 0;
}
.pricing-switchers .switcher-button {
    height: 1rem;
    width: 1rem;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 555;
    margin: 0;
    border: none;
    transition: .3s ease-in-out;
    border-radius: 100%;
}
.shape.rellax {
    z-index: 1;
}
.card {
    box-shadow: 0 0 0 0.05rem rgb(8 60 130 / 6%), 0 0 1.25rem rgb(30 34 40 / 4%);
    border: 0;
}
.pricing.card .card-body {
    padding-top: 3rem;
    padding-bottom: 3rem;
    margin-left: auto;
    margin-right: auto;
}
.pricing.card .prices {
    padding: 0;
    margin: 0;
    line-height: 1;
    background: 0 0;
    font-weight: 500;
    position: relative; 
}
.price {
    margin: 0;
}
.pricing.card .prices .price-currency {
    display: inline-block;
    font-size: 1rem;
    font-weight: 500;
    padding-right: 0.2rem;
    padding-top: 0.4rem;
}
.pricing.card .prices .price-value {
    font-size: 3.4rem;
}
.pricing.card .prices .price-duration {
    font-size: .8rem;
    font-weight: 500;
    color: #60697b;
    margin-top: auto;
    margin-bottom: 0.25rem;
}
.pricing.card .prices .price-duration:before {
    content: "/";
    padding: 0;
}
.pricing.card .card-body .card-title {
    margin: 7px 0;
    padding: 0;
    color: #cecece;
}
.icon-list {
    padding-left: 0;
    list-style: none;
}
.icon-list.bullet-bg li {
    padding-left: 1.5rem;
    position: relative;
    font-size: 1.2rem;
}
.icon-list.bullet-soft-primary.bullet-bg i {
    background-color: #dce7f9;
}
.icon-list.bullet-bg i {
    border-radius: 100%;
    width: 1rem;
    height: 1rem;
    top: 0.2rem;
    font-size: .8rem;
    line-height: 1;
    letter-spacing: normal;
    text-align: center;
    display: table;
}
h4.card-title {
    font-size: 22px;
    margin: 14px 0;
    display: block;
}
.icon-list li {
    display: flex;
    line-height: 2.6;
    align-items: center;
}
.bullet-bg li span {
    margin-left: 6px;
}
.pagetitle{
    color: #000;
    line-height: 35px;
    font-weight: 500;
    max-width: 550px;
    margin: auto;
    margin-bottom: 43px;
}

.btn-larges{
    font-size: 13px;
    color: #ffffff;
    background: linear-gradient(90deg,#1b85c7 0%,#14689c 100%);
    display: inline-block;
    min-width: 150px;
    height: 40px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
    padding: 11px;
    position: relative;
}







`;