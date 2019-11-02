export interface IAccount {
    environment:    string;
    serviceAccount: string;
    password:       string;
    links:          ILink[];
}

export interface ILink {
    href:   string;
    rel:    string;
    method: string;
}