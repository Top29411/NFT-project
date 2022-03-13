import axios from "axios"
const URL = process.env.REACT_APP_API_URL

export async function getHomepage() {
	return await axios.get(`${URL}/homepage`)
}

export async function getSocialLinks() {
	return await axios.get(`${URL}/social-links`)
}

export async function getFooter() {
	return await axios.get(`${URL}/footer`)
}

export async function getHomepageHeader() {
	return await axios.get(`${URL}/homepage-header-section-data`)
}

export async function getHomepageHeading() {
	return await axios.get(`${URL}/homepage-heading-section-data`)
}

export async function getHomepageTokenomics() {
	return await axios.get(`${URL}/homepage-tokenomics-section-data`)
}

export async function getHomepageNtf() {
	return await axios.get(`${URL}/homepage-nft-section-data`)
}

export async function getHomepageTeam() {
	return await axios.get(`${URL}/homepage-team-section-data`)
}

export async function getHomepageFeatured() {
	return await axios.get(`${URL}/homepage-featured-section-data`)
}

