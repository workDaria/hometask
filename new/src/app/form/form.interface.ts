import { TuiDay } from "@taiga-ui/cdk";

export interface Iform
{

    nameValue: string | null;
    urlValue: string | null;
    placeValue: string | null;
    fromValue: (TuiDay | null)[] | null;
    toValue: (TuiDay | null)[] | null;
    statusValue: string | null;
    infoValue: string | null;
    controlValue: string | null;
    priorityValue: string | null;



}