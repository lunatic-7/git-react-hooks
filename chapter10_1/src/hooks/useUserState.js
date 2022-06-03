import { useContext } from 'react';
import { StateContext } from '../contexts';

export default function useTheme() {
    const { state } = useContext(StateContext);
    return state.user;
}