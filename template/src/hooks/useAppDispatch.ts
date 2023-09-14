import { AppDispatch } from '@redux/store';
import { useDispatch } from 'react-redux';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
