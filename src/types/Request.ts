import { Company } from "./Company"
import { Profile } from "./Profile"

export type Requests = {
    id: string | number
    picture: string
    comment: string
    status: string
    registered: string
    company: Company
    child: Profile
    parent: Profile
}