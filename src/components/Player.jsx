import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../web/api';
import { selectOpposite } from '../sex';

const Player = () => {
    const [player, setPlayer] = useState({});
    const params = useParams();

    useEffect(async () => {
        const player = await Api.get(params.name);
        setPlayer(player);
    }, []);

    const update = async (updatedPlayer) => {
        const player = await Api.update(updatedPlayer);
        setPlayer(player);
    };

    const changeSex = () => {
        const sex = selectOpposite(player.sex);
        update({ ...player, sex });
    };

    const { name, level, bonus, sum, sex } = player;
    return (
        <div className="player">
            <h1>{name}</h1>
            <div className="sex" onClick={changeSex}>
                {sex}
            </div>
            <h3>Strength: {sum}</h3>
            <div className="stats">
                <div className="stat">
                    <div className="left_button">
                        <button
                            type="button"
                            onClick={() => update({ ...player, level: level - 1 })}
                            onTouchEnd={() => update({ ...player, level: level - 1 })}
                        >
                            MINUS
                        </button>
                    </div>
                    <div className="stat_value">
                        Level:
                        <div>{level}</div>
                    </div>
                    <div className="right_button">
                        <button
                            type="button"
                            onClick={() => update({ ...player, level: level + 1 })}
                        >
                            PLUS
                        </button>
                    </div>
                </div>
                <div className="stat">
                    <div className="left_button">
                        <button
                            type="button"
                            onClick={() => update({ ...player, bonus: bonus - 1 })}
                        >
                            MINUS
                        </button>
                    </div>
                    <div className="stat_value">
                        Bonus:
                        <div>{bonus}</div>
                    </div>
                    <div className="right_button">
                        <button
                            type="button"
                            onClick={() => update({ ...player, bonus: bonus + 1 })}
                        >
                            PLUS
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;
