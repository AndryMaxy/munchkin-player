import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Api from '../web/api';
import Sex from '../sex';

const Login = () => {
    const input = useRef('');
    const maleSex = useRef('');
    const femaleSex = useRef('');
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        const name = input.current.value;
        const sex = maleSex.current.checked ? maleSex.current.value : femaleSex.current.value;
        if (name.length < 2) return;

        await Api.create(name, sex);
        history.push(`/player/${name}`);
    };

    const oncNameCange = (e) => {
        if (e.target.value.length > 10) {
            e.target.value = e.target.value.substring(0, 10);
        }
    };

    const oncSexCange = (e) => {
        if (e.target.value === maleSex.current.value) {
            femaleSex.current.checked = false;
        }
        if (e.target.value === femaleSex.current.value) {
            maleSex.current.checked = false;
        }
    };

    return (
        <div className="login">
            <div className="login-element">
                <h3>Enter your name:</h3>
            </div>
            <div className="login-element name">
                <input ref={input} type="text" onChange={oncNameCange} />
            </div>
            <div className="login-element">
                <div className="sex">
                    <label>
                        Male
                        <input
                            ref={maleSex}
                            type="radio"
                            value={Sex.Male}
                            onChange={oncSexCange}
                            defaultChecked
                        />
                    </label>
                </div>
                <div className="sex">
                    <label>
                        Female
                        <input
                            ref={femaleSex}
                            type="radio"
                            value={Sex.Female}
                            onChange={oncSexCange}
                        />
                    </label>
                </div>
            </div>
            <div className="login-element">
                <button type="button" onClick={submit}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Login;
