export interface Info {
	rate: number;
	timestamp: number;
}

export interface Query {
	amount: number;
	from: string;
	to: string;
}

export interface ConvertModel {
	date: string;
	info: Info;
	query: Query;
	result: number;
	success: boolean;
}
