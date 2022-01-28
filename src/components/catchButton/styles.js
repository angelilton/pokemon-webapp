import styled from 'styled-components'

export const Toggle = styled.div`
  position: relative;
  align-self: flex-end;
  width: 50px;
  height: 35px;
  margin-top: 1.7rem;

  .switch {
    visibility: hidden;
    position: absolute;
    margin-left: -9999px;
  }

  .switch + label {
    display: block;
    position: relative;
    cursor: pointer;
    outline: none;
    user-select: none;
  }

  .switch--shadow + label {
    position: relative;
    padding: 2px;
    width: 56px;
    height: 34px;
    background-color: #dddddd;
    border-radius: 60px;
  }
  .switch--shadow + label:before,
  .switch--shadow + label:after {
    display: block;
    position: absolute;
    top: 1px;
    left: 1px;
    bottom: 1px;
    content: '';
  }
  .switch--shadow + label:before {
    right: 1px;
    background-color: #f1f1f1;
    border-radius: 60px;
    transition: background 0.4s;
  }
  .switch--shadow + label:after {
    width: 62px;
    background-color: #fff;
    border-radius: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: all 0.4s;
  }
  .switch--shadow:checked + label:before {
    background-color: #8ce196;
  }
  .switch--shadow:checked + label:after {
    transform: translateX(60px);
  }

  /* Estilo Flat */
  .switch--flat + label {
    padding: 2px;
    width: 50px;
    height: 35px;
    background-color: #dddddd;
    border-radius: 60px;
    transition: background 0.4s;
  }
  .switch--flat + label:before,
  .switch--flat + label:after {
    display: block;
    position: absolute;
    content: '';
  }
  .switch--flat + label:before {
    top: 0.13rem;
    left: 0.13rem;
    bottom: 0.13rem;
    right: 0.13rem;
    background-color: #fff;
    border-radius: 60px;
    transition: background 0.4s;
  }

  // ball
  .switch--flat + label:after {
    top: 4px;
    left: 4px;
    bottom: 4px;
    width: 26px;
    /* background-color: #dddddd;
    border-radius: 50px;
    transition: margin 0.4s, background 0.4s; */
    background: #ff0000;
    border: 0.2vmin solid #000;
    border-radius: 50%;
    transform: scale(0.9);
    transition: 0.8s;
  }

  .switch--flat + label.switch.switch::before {
    content: '';
    position: absolute;
    bottom: -0.3vmin;
    left: -0.3vmin;
    background: #fff;
    width: 14.6vmin;
    height: 7.5vmin;
    border: 0.5vmin solid #000;
    border-bottom-left-radius: 30vmin;
    border-bottom-right-radius: 30vmin;
    box-shadow: inset 1vmin -1vmin 1vmin #7f7c82;
  }

  .switch--flat:checked + label {
    background-color: #4bb543;
  }
  .switch--flat:checked + label:after {
    margin-left: 15px;
  }
`
