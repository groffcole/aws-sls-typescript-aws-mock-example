import { doSomething } from "./BananaBread";
import { SQS } from "aws-sdk";

jest.mock("aws-sdk/clients/sqs");
const sqs = (SQS as unknown) as jest.Mock;
const getQueueUrl = jest.fn();
sqs.mockImplementationOnce(() => ({ getQueueUrl }));

test("doSomething should do something", async () => {
  const queueName = "the queue name";
  const expectedQueueUrl = "the url";

  getQueueUrl.mockReturnValue({ promise: () => ({ QueueUrl: expectedQueueUrl }) });

  const actualQueueUrl = await doSomething(queueName);

  expect(getQueueUrl).toHaveBeenCalledWith({ QueueName: queueName });
  expect(actualQueueUrl).toEqual(expectedQueueUrl);
});
