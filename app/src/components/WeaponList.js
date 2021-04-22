import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRune } from '../actions/index'

const WeaponList = () => {

    const {runeData, isLoading, error} = useSelector(state => state);
    const dispatch = useDispatch()

    useEffect(() => {
        fetchRune(dispatch)
    }, [dispatch]);

    console.log(runeData)

    if (isLoading) {
        return (
            <h3>Loading Gielinor...</h3>
        )
    }

    return (
        <div class="flex">
           {runeData.map((rune) => (
          <div class="itemContainer" key={rune.id}>
          <h3>{rune.name}</h3>
          <p>{rune.examine}</p>
          <p>High Alch Price: {rune.cost}gp</p>
          <a href={rune.wiki_url}>Wiki Information</a>
          </div>
        ))}
        </div>
    )
}

export default WeaponList;