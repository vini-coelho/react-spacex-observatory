import React, { useEffect, useState } from 'react';

import Loader from 'react-loader-spinner';

import api from '../../services/api';

import { Container, Body, Loading } from './styles';
import LaunchesCard from '../../components/LaunchesCard';

export default function Launches() {

	const [launches, setLaunches] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function getLaunches() {
			setLoading(true);

			const response = await api.get('/launches/past');

			setLoading(false)
			setLaunches(response.data);
		}

		getLaunches();
	}, []);

	if (loading) {
		return (
			<Container>
				<Body>
					<Loading>
						<Loader type="ThreeDots" color="#FFFFFF" />
					</Loading>
				</Body>
			</Container>
		)
	}

	return (
		<Container>
			<Body>
				{
					launches.map(item => {
						return (
							<LaunchesCard item={item} />
						)
					})
				}
			</Body>
		</Container>
	)
}